"use client";

import { Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { contactSchema } from "@/lib/validation";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      message: "",
      email: "",
      name: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof contactSchema>) => {
    setLoading(true);
    const telegramBotId = process.env.NEXT_PUBLIC_TELEGRAM_BOT_API!;
    const telegramChatId = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID!;

    const promise = fetch(
      `https://api.telegram.org/bot${telegramBotId}/sendMessage`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "cache-control": "no-cache",
        },
        body: JSON.stringify({
          chat_id: telegramChatId,
          text: `Name : ${values.name}
        Email : ${values.email}
        Message : ${values.message}`,
        }),
      }
    )
      .then(() => form.reset())
      .finally(() => setLoading(false));

    toast.promise(promise, {
      loading: "Loading...",
      success: "Successfully sent!",
      error: "Something went wrong",
    });
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    disabled={loading}
                    className="resize-none h-32"
                    placeholder="Ask question or just say Hi"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Your email address"
                    {...field}
                    disabled={loading}
                  />
                </FormControl>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Your name here"
                    {...field}
                    disabled={loading}
                  />
                </FormControl>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />
          <Button
            className="w-fit"
            size={"lg"}
            type="submit"
            disabled={loading}
            aria-label="sendBtn"
          >
            <span>Send</span>
            <Send className="w-4 h-4 ml-2 animate-pulse" />
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
