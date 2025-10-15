import Image from "next/image";
import styles from "./page.module.css";
import { ScrollingWaveform, StaticWaveform } from "@/components/ui/waveform";
import { cn } from "@/lib/utils";
import { GridPattern } from "@/components/ui/shadcn-io/grid-pattern";
import { BackgroundPaths } from "@/components/ui/shadcn-io/background-paths";
import ConversationDemo from "@/components/ui/conversation-demo/conversation-demo";

export default function Home() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.pill}>
            <span className={styles.pillIcon} aria-hidden="true">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M13 2 5 14h6l-1 8 8-12h-6l1-8Z" fill="currentColor" />
              </svg>
            </span>
            AI-Powered
          </span>
          <h1 className={styles.headline}>
            <span className={styles.headlineLine}>
              Cutting edge voice models
            </span>
            <span className={styles.headlineLine}>
              for <span className={styles.highlight}>Malaysians.</span>
            </span>
          </h1>
          <p className={styles.subheadline}>
            Empowering voices across Malaysia with cutting-edge AI technology
          </p>
          <div className={styles.ctaRow}>
            <a className={styles.primaryCta} href="#contact">
              <span className={styles.ctaIcon} aria-hidden="true">
                <Image
                  src="/assets/microphone-2.svg"
                  alt=""
                  width={18}
                  height={18}
                />
              </span>
              Speak to Suara
            </a>
            <a className={styles.secondaryCta} href="#learn-more">
              Learn More
            </a>
          </div>
        </div>
      </section>

      <section className={styles.voiceStage}>
        <div className={styles.centerStack}>
          <div className={styles.pulseWrap} aria-hidden="true">
            <span className={`${styles.pulseCircle} ${styles.p1}`} />
            <span className={`${styles.pulseCircle} ${styles.p2}`} />
            <span className={`${styles.pulseCircle} ${styles.p3}`} />
          </div>
          <button className={styles.micButton} aria-label="Start speaking">
            <Image
              src="/assets/microphone-2.svg"
              alt=""
              width={28}
              height={28}
              priority
            />
          </button>

          <span className={`${styles.bubble} ${styles.bTopLeft}`}>Nǐ hǎo</span>
          <span className={`${styles.bubble} ${styles.bTopRight}`}>
            Selamat datang
          </span>
          <span className={`${styles.bubble} ${styles.bBottomLeft}`}>
            Apa khabar
          </span>
          <span className={`${styles.bubble} ${styles.bBottomRight}`}>
            வணக்கம்
          </span>
        </div>

        <div className={styles.waveRight}>
          <StaticWaveform
            height={140}
            barWidth={10}
            barGap={7}
            fadeEdges
            barColor="#90A4F3"
            className={styles.waveform}
          />
        </div>
      </section>

      <section className={styles.howSection}>
        <div className={styles.howContent}>
          <h2 className={styles.howHeadline}>
            How <span>Suara</span> Works
          </h2>
          <p className={styles.howSubheadline}>
            Voice AI designed for real conversations with seamless integration
            with leading AI platforms.
          </p>
          <div className={styles.howGrid}>
            <div className={styles.howCard}>
              <div className={`${styles.howCardText} mb-[60px]`}>
                <h3 className={styles.howCardTitle}>Voice Input</h3>
                <p className={styles.howCardBody}>
                  Capture natural speech across Malay, English, Mandarin, and
                  local dialects directly from web, phone, or WhatsApp.
                </p>
              </div>
              <div className={styles.howWave}>
                <div className="relative flex h-[250px] w-full flex-col items-center justify-center overflow-hidden rounded-lg">
                  <GridPattern
                    style={{ border: "none" }}
                    width={40}
                    height={40}
                    className={cn(
                      "[mask-image:linear-gradient(to_bottom_right,transparent,transparent,#1d4ed8a8,transparent,transparent,#1d4ed8a8)] "
                    )}
                  />
                </div>
                <StaticWaveform
                  height={150}
                  barWidth={4}
                  barGap={8}
                  barColor="#2563eb"
                  className={styles.howWaveStatic}
                />
                <ScrollingWaveform
                  height={150}
                  barWidth={4}
                  barGap={8}
                  speed={40}
                  fadeEdges
                  barColor="#2563eb"
                  className={styles.howWaveAnimated}
                />
              </div>
            </div>
            <div className={styles.howCard}>
              <div className={styles.howCardText}>
                <h3 className={styles.howCardTitle}>AI Processing</h3>
                <p className={styles.howCardBody}>
                  Smart language understanding powered by Ilmu GPT and Llama
                  ensures accurate comprehension and transcription.
                </p>
              </div>
              <div className={`${styles.howWave} ${styles.aiOrb}`}>
                {/* <div className="absolute flex h-[250px] w-full flex-col items-center justify-center rounded-lg">
                  <BackgroundPaths title="" />
                </div> */}
                <div className={styles.orbStage}>
                  <span className={styles.orbRing} aria-hidden="true" />
                  <div className={styles.orbWrap}>
                    <video
                      className={styles.orbVideo}
                      src="https://www.apple.com/105/media/us/siri/2018/ee7c4c16_aae5_4678_9cdd_7ca813baf929/films/siri_orb_large.mp4"
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      // poster="/assets/orb-poster.jpg" // optional fallback image
                    />
                    <span className={styles.orbGloss} aria-hidden="true" />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.howCard}>
              <div className={styles.howCardText}>
                <h3 className={styles.howCardTitle}>Voice Output</h3>
                <p className={styles.howCardBody}>
                  Powered by Eleven Labs, generate smooth, natural responses
                  with realistic voices for seamless conversations.
                </p>
              </div>
              <div className={`${styles.howWave} ${styles.conversationWave}`}>
                <div className={styles.conversationBackdrop}>
                  <GridPattern
                    style={{ border: "none" }}
                    width={40}
                    height={40}
                    className={cn(
                      "[mask-image:linear-gradient(to_bottom_right,transparent,transparent,#1d4ed8a8,transparent,transparent,#1d4ed8a8)] "
                    )}
                  />
                </div>
                <div className={styles.conversationWrap}>
                  <ConversationDemo />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.rapidscreenSection}>
        <div className={styles.rapidscreenHeader}>
          <h2 className={styles.rapidscreenTitle}>
            Suara <span className={styles.rapidscreenHighlight}>×</span>{" "}
            RapidScreen
          </h2>
          <p className={styles.rapidscreenSubtitle}>
            Our advanced AI models are trained to understand diverse Malaysian
            dialects and languages through RapidScreen AI, ensuring accurate
            voice recognition across all communities.
          </p>
        </div>
        <div className={styles.rapidscreenGrid}>
          <div className={styles.rapidscreenCard}>
            <div className={styles.rapidscreenCardText}>
              <h3 className={styles.rapidscreenCardTitle}>
                Multilingual Understanding
              </h3>
              <p className={styles.rapidscreenCardBody}>
                Recognizes Malay, English, Mandarin, Tamil, and dialect nuances
                to keep every conversation clear.
              </p>
            </div>
            <div className="relative flex h-[250px] w-full flex-col items-center justify-center overflow-hidden rounded-lg">
              <GridPattern
                style={{ border: "none" }}
                width={40}
                height={40}
                className={cn(
                  "[mask-image:linear-gradient(to_bottom_right,transparent,transparent,#1d4ed8a8,transparent,transparent,#1d4ed8a8)] "
                )}
              />
            </div>
          </div>
          <div className={styles.rapidscreenCard}>
            <div className={styles.rapidscreenCardText}>
              <h3 className={styles.rapidscreenCardTitle}>
                Accurate Speech-to-Text
              </h3>
              <p className={styles.rapidscreenCardBody}>
                Advanced acoustic modeling delivers precise transcripts even in
                noisy, real-world environments.
              </p>
            </div>
            <div className="relative flex h-[250px] w-full flex-col items-center justify-center overflow-hidden rounded-lg">
              <GridPattern
                style={{ border: "none" }}
                width={40}
                height={40}
                className={cn(
                  "[mask-image:linear-gradient(to_bottom_right,transparent,transparent,#1d4ed8a8,transparent,transparent,#1d4ed8a8)] "
                )}
              />
            </div>
          </div>
          <div className={styles.rapidscreenCard}>
            <div className={styles.rapidscreenCardText}>
              <h3 className={styles.rapidscreenCardTitle}>
                Cross-Platform Access
              </h3>
              <p className={styles.rapidscreenCardBody}>
                Seamless deployment across web, mobile, and telephony with
                unified Suara APIs.
              </p>
            </div>
            <div className="relative flex h-[250px] w-full flex-col items-center justify-center overflow-hidden rounded-lg">
              <GridPattern
                style={{ border: "none" }}
                width={40}
                height={40}
                className={cn(
                  "[mask-image:linear-gradient(to_bottom_right,transparent,transparent,#1d4ed8a8,transparent,transparent,#1d4ed8a8)] "
                )}
              />
            </div>
          </div>
          <div className={styles.rapidscreenCard}>
            <div className={styles.rapidscreenCardText}>
              <h3 className={styles.rapidscreenCardTitle}>
                AI-Powered Precision
              </h3>
              <p className={styles.rapidscreenCardBody}>
                RapidScreen insights continuously tune Suara voice models for
                faster, smarter responses.
              </p>
            </div>
            <div className="relative flex h-[250px] w-full flex-col items-center justify-center overflow-hidden rounded-lg">
              <GridPattern
                style={{ border: "none" }}
                width={40}
                height={40}
                className={cn(
                  "[mask-image:linear-gradient(to_bottom_right,transparent,transparent,#1d4ed8a8,transparent,transparent,#1d4ed8a8)] "
                )}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
