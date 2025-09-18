'use client';

import { useChat } from '@ai-sdk/react';
import { useState } from 'react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { AlertCircle, Info } from 'lucide-react';

export default function Chat() {
  const [input, setInput] = useState('');
  const { messages, sendMessage, error, clearError } = useChat();
  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
      <h1 className="text-center text-lg mb-6">AI Gateway Embeddings for RAG</h1>
      {messages.length === 0 ? (
        <Alert className="mb-4">
          <Info className="h-4 w-4" />
          <AlertTitle>Quick start</AlertTitle>
          <AlertDescription>
            <p>Paste any facts or docs into the chat, then ask about them.</p>
            <p className="mt-1">
              Try: &quot;Our return window is 30 days and shipping to the US is free,&quot; then ask
              &quot;Do you offer month-long refunds?&quot; or &quot;Is shipping to San Francisco free?&quot;
            </p>
          </AlertDescription>
        </Alert>
      ) : null}
      <div className="space-y-4">
        {messages.map(m => (
          <div key={m.id} className="whitespace-pre-wrap">
            <div>
              <div className="font-bold">{m.role}</div>
              {m.parts.map(part => {
                switch (part.type) {
                  case 'text':
                    return <p>{part.text}</p>;
                  case 'tool-addResource':
                  case 'tool-getInformation':
                    return (
                      <p>
                        call{part.state === 'output-available' ? 'ed' : 'ing'}{' '}
                        tool: {part.type}
                        <pre className="my-4 bg-zinc-100 p-2 rounded-sm whitespace-pre-wrap break-words">
                          {JSON.stringify(part.input, null, 2)}
                        </pre>
                      </p>
                    );
                }
              })}
            </div>
          </div>
        ))}
      </div>

      {error ? (
        <div className="mt-4">
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <div className="flex w-full items-start justify-between gap-4">
              <div className="space-y-1 min-w-0">
                <AlertTitle>Request failed</AlertTitle>
                <AlertDescription className="break-words">
                  {error.message}
                </AlertDescription>
              </div>
              <Button
                type="button"
                onClick={() => clearError()}
                variant="outline"
                size="sm"
              >
                Dismiss
              </Button>
            </div>
          </Alert>
        </div>
      ) : null}

      <form
        onSubmit={e => {
          e.preventDefault();
          sendMessage({ text: input });
          setInput('');
        }}
      >
        <Input
          type="text"
          className="fixed bottom-0 w-full max-w-md mb-8 shadow-xl"
          value={input}
          placeholder="Say something..."
          onChange={e => setInput(e.currentTarget.value)}
        />
      </form>
    </div>
  );
}