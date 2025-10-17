"use client";

import { useEffect, useState } from "react";

import { Card } from "@/components/ui/card";
import {
  Conversation,
  ConversationContent,
  ConversationEmptyState,
  ConversationScrollButton,
} from "@/components/ui/conversation";
import { Message, MessageContent } from "@/components/ui/message";
import { Orb } from "@/components/ui/orb";
import { Response } from "@/components/ui/response";
import { ShimmeringText } from "@/components/ui/shimmering-text";
import { StaticWaveform, Waveform } from "../waveform";

const allMessages = [
  {
    id: "1",
    role: "user" as const,
    parts: [
      {
        type: "text",
        text: "Hello, can you help me call Danial?",
      },
    ],
  },
  {
    id: "2",
    role: "assistant" as const,
    parts: [
      {
        type: "text",
        tokens: [
          "Hi!",
          " I'd",
          " be",
          " happy",
          " to",
          " help",
          " you",
          " with",
          " your",
          " order.",
          " Could",
          " you",
          " please",
          " provide",
          " your",
          " order",
          " number?",
        ],
        text: "Hi! I'd be happy to help you with your order. Could you please provide your order number?",
      },
    ],
  },
  {
    id: "3",
    role: "user" as const,
    parts: [
      {
        type: "text",
        text: "I need to set up a call with Danial for tomorrow.",
      },
    ],
  },
  {
    id: "4",
    role: "assistant" as const,
    parts: [
      {
        type: "text",
        tokens: [
          "Thank",
          " you!",
          " Let",
          " me",
          " pull",
          " up",
          " your",
          " order",
          " details.",
          " I",
          " can",
          " see",
          " that",
          " your",
          " order",
          " was",
          " placed",
          " on",
          " March",
          " 15th",
          " and",
          " is",
          " currently",
          " being",
          " processed.",
          " It",
          " should",
          " ship",
          " within",
          " the",
          " next",
          " 1-2",
          " business",
          " days.",
          " Is",
          " there",
          " anything",
          " specific",
          " you'd",
          " like",
          " to",
          " know",
          " about",
          " this",
          " order?",
        ],
        text: "Thank you! Let me pull up your order details. I can see that your order was placed on March 15th and is currently being processed. It should ship within the next 1-2 business days. Is there anything specific you'd like to know about this order?",
      },
    ],
  },
  {
    id: "5",
    role: "user" as const,
    parts: [
      {
        type: "text",
        text: "Can you also remind me of last week's meeting?",
      },
    ],
  },
  {
    id: "6",
    role: "assistant" as const,
    parts: [
      {
        type: "text",
        tokens: [
          "Absolutely!",
          " Since",
          " the",
          " order",
          " hasn't",
          " shipped",
          " yet,",
          " I",
          " can",
          " update",
          " the",
          " shipping",
          " address",
          " for",
          " you.",
          " What",
          " would",
          " you",
          " like",
          " the",
          " new",
          " address",
          " to",
          " be?",
        ],
        text: "Absolutely! Since the order hasn't shipped yet, I can update the shipping address for you. What would you like the new address to be?",
      },
    ],
  },
];

const ConversationDemo = () => {
  const [messages, setMessages] = useState<typeof allMessages>([]);
  const [streamingMessageIndex, setStreamingMessageIndex] = useState<
    number | null
  >(null);
  const [streamingContent, setStreamingContent] = useState("");

  useEffect(() => {
    const timeouts: NodeJS.Timeout[] = [];
    const intervals: NodeJS.Timeout[] = [];
    let currentMessageIndex = 0;

    const addNextMessage = () => {
      if (currentMessageIndex >= allMessages.length) return;

      const message = allMessages[currentMessageIndex];
      const part = message.parts[0];

      if (message.role === "assistant" && "tokens" in part && part.tokens) {
        setStreamingMessageIndex(currentMessageIndex);
        setStreamingContent("");

        let currentContent = "";
        let tokenIndex = 0;

        const streamInterval = setInterval(() => {
          if (tokenIndex < part.tokens.length) {
            currentContent += part.tokens[tokenIndex];
            setStreamingContent(currentContent);
            tokenIndex++;
          } else {
            clearInterval(streamInterval);
            setMessages((prev) => [...prev, message]);
            setStreamingMessageIndex(null);
            setStreamingContent("");
            currentMessageIndex++;

            // Add next message after a delay
            timeouts.push(setTimeout(addNextMessage, 500));
          }
        }, 100);

        intervals.push(streamInterval);
      } else {
        setMessages((prev) => [...prev, message]);
        currentMessageIndex++;

        timeouts.push(setTimeout(addNextMessage, 800));
      }
    };

    // Start after 1 second
    timeouts.push(setTimeout(addNextMessage, 1000));

    return () => {
      timeouts.forEach((timeout) => clearTimeout(timeout));
      intervals.forEach((interval) => clearInterval(interval));
    };
  }, []);

  return (
    <Card className="absolute overflow-hidden transparent mx-auto my-0 size-full h-[400px] py-0">
      <div className="flex h-full flex-col overflow-hidden">
        <Conversation className="overflow-hidden">
          <ConversationContent className="overflow-hidden">
            <>
              {messages.map((message) => (
                <Message from={message.role} key={message.id}>
                  {message.role === "user" && (
                    <MessageContent>
                      {message.parts.map((part, i) => {
                        switch (part.type) {
                          case "text":
                            return (
                              <Response key={`${message.id}-${i}`}>
                                {part.text}
                              </Response>
                            );
                          default:
                            return null;
                        }
                      })}
                    </MessageContent>
                  )}
                  {message.role === "assistant" && (
                    <div className="ring-border w-[200px] overflow-hidden rounded-sm ring-1">
                      <StaticWaveform
                        height={48}
                        barWidth={2}
                        barGap={2}
                        barColor="#2563eb"
                        // className={styles.howWaveStatic}
                      />{" "}
                    </div>
                  )}
                </Message>
              ))}
              {streamingMessageIndex !== null && (
                <Message
                  from={allMessages[streamingMessageIndex].role}
                  key={`streaming-${streamingMessageIndex}`}
                >
                  {/* <MessageContent>
                      <Response>{streamingContent || "\u200B"}</Response>
                    </MessageContent> */}
                  {allMessages[streamingMessageIndex].role === "assistant" && (
                    <div className="ring-border w-[200px] overflow-hidden rounded-sm ring-1">
                      <StaticWaveform
                        height={48}
                        barWidth={2}
                        barGap={2}
                        barColor="#2563eb"
                        // className={styles.howWaveStatic}
                      />
                    </div>
                  )}
                </Message>
              )}
            </>
          </ConversationContent>
          <ConversationScrollButton />
        </Conversation>
      </div>
    </Card>
  );
};

export default ConversationDemo;
