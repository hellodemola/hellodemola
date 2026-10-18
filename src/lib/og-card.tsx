import { cacheLife } from "next/cache";
import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

// Shared social card (1200×630) behind every opengraph-image route, in the
// same style as the yousure.ng cards: a full-bleed photo or screenshot under
// a dark overlay, with the page's headline and description on the image, so
// links shared on LinkedIn, WhatsApp, Slack and X explain themselves.
// The font files have their kerning tables removed: satori measures words
// without kerning but draws them with it, which leaves gaps.
export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

export type OgCard = {
  /** Small line above the headline. */
  eyebrow: string;
  /** Headline. "\n" forces a line break. */
  title: string;
  /** Words in the headline set in orange serif italic, as on the page. */
  accent?: string;
  description: string;
  /** Photo or screenshot under public/. */
  image: string;
  /** CSS object-position for the image. */
  imagePosition?: string;
  /**
   * "cover" fills the card (photos, screenshots); "portrait" puts a person's
   * photo in a panel on the right so their face isn't behind the headline.
   */
  layout?: "cover" | "portrait";
};

const night = "#0f1115";
const paper = "#f6f3ee";
const muted = "#a3a9b4";
const accentColor = "#ff5a1f";

function clip(text: string, max: number) {
  if (text.length <= max) return text;
  return `${text.slice(0, text.lastIndexOf(" ", max - 1))}…`;
}

function titleSize(title: string) {
  if (title.length <= 40) return 70;
  if (title.length <= 70) return 58;
  return 50;
}

// Cached so the cards are prerendered at build time rather than reading
// files on every request.
async function readAssets(image: string) {
  "use cache";
  cacheLife("max");
  const fonts = join(process.cwd(), "assets/fonts");
  const [semi, regular, serif, photo] = await Promise.all([
    readFile(join(fonts, "Geist-SemiBold.ttf")),
    readFile(join(fonts, "Geist-Regular.ttf")),
    readFile(join(fonts, "InstrumentSerif-Italic.ttf")),
    readFile(join(process.cwd(), "public", image)),
  ]);
  const type = image.endsWith(".png") ? "image/png" : "image/jpeg";
  // Strings, because cached values are serialised and binary data doesn't
  // come back in a form satori accepts.
  return {
    semi: semi.toString("base64"),
    regular: regular.toString("base64"),
    serif: serif.toString("base64"),
    photo: `data:${type};base64,${photo.toString("base64")}`,
  };
}

const font = (base64: string) => Buffer.from(base64, "base64");

// Satori can't style one word inside a wrapping text node, so each word is
// its own flex item; accent words (wherever they sit) get the serif italic.
function headlineLines(title: string, accent?: string) {
  const start = accent ? title.replace(/\n/g, " ").indexOf(accent) : -1;
  const end = start + (accent?.length ?? 0);
  let offset = 0;
  return title.split("\n").map((line) =>
    line.split(" ").map((word) => {
      const isAccent = start !== -1 && offset >= start && offset < end;
      offset += word.length + 1;
      return { word, isAccent };
    }),
  );
}

export async function renderOgCard({ eyebrow, title, accent, description, image, imagePosition, layout = "cover" }: OgCard) {
  const { semi, regular, serif, photo } = await readAssets(image);
  const fontSize = titleSize(title);
  const portrait = layout === "portrait";

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", position: "relative", background: night, color: paper, fontFamily: "Geist" }}>
        {/* eslint-disable-next-line @next/next/no-img-element -- rendered by next/og, not the browser */}
        <img
          src={photo}
          alt=""
          width={ogSize.width}
          height={ogSize.height}
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: portrait ? 470 : 1200,
            height: "100%",
            objectFit: "cover",
            objectPosition: imagePosition ?? "center 25%",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            backgroundImage: portrait
              ? "linear-gradient(90deg, rgba(15,17,21,1) 0%, rgba(15,17,21,1) 58%, rgba(15,17,21,0.15) 80%, rgba(15,17,21,0) 100%)"
              : "linear-gradient(90deg, rgba(15,17,21,0.985) 0%, rgba(15,17,21,0.97) 50%, rgba(15,17,21,0.6) 100%)",
          }}
        />
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 10, display: "flex", background: accentColor }} />

        <div style={{ position: "relative", flex: 1, display: "flex", flexDirection: "column", padding: "62px 80px 58px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div
              style={{
                width: 50,
                height: 50,
                borderRadius: 25,
                background: paper,
                color: night,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "Instrument Serif",
                fontSize: 34,
              }}
            >
              d
            </div>
            <div style={{ fontFamily: "Geist SemiBold", fontSize: 32, letterSpacing: -0.5 }}>hellodemola</div>
          </div>

          <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", maxWidth: portrait ? 700 : 920 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 22, letterSpacing: 3, textTransform: "uppercase", color: muted, marginBottom: 20 }}>
              <div style={{ width: 40, height: 2, display: "flex", background: accentColor }} />
              {eyebrow}
            </div>
            <div style={{ display: "flex", flexDirection: "column", fontFamily: "Geist SemiBold", fontSize, lineHeight: 1.06, letterSpacing: -2 }}>
              {headlineLines(title, accent).map((words, i) => (
                <div key={i} style={{ display: "flex", flexWrap: "wrap" }}>
                  {words.map(({ word, isAccent }, j) => (
                    <span
                      key={j}
                      style={
                        isAccent
                          ? { fontFamily: "Instrument Serif", fontSize: fontSize * 1.08, letterSpacing: -0.5, color: accentColor, marginRight: fontSize * 0.22 }
                          : { marginRight: fontSize * 0.24 }
                      }
                    >
                      {word}
                    </span>
                  ))}
                </div>
              ))}
            </div>
            <div style={{ marginTop: 24, fontSize: 27, lineHeight: 1.4, color: "#c8ccd3" }}>{clip(description, portrait ? 120 : 140)}</div>
          </div>

          <div style={{ marginTop: "auto", paddingTop: 28, display: "flex", justifyContent: "space-between", fontSize: 23, color: muted }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ width: 10, height: 10, borderRadius: 5, background: "#22c55e", display: "flex" }} />
              hellodemola.com
            </div>
            {!portrait && <div>AI Product Engineer · Web, iOS and Android</div>}
          </div>
        </div>
      </div>
    ),
    {
      ...ogSize,
      fonts: [
        { name: "Geist SemiBold", data: font(semi), weight: 600, style: "normal" },
        { name: "Geist", data: font(regular), weight: 400, style: "normal" },
        { name: "Instrument Serif", data: font(serif), weight: 400, style: "italic" },
      ],
    },
  );
}
