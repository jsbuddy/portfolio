"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { sendContactMessage } from "@/app/actions/contact";
import { Button } from "./ui/button";
import { Field, FieldError, FieldLabel } from "./ui/field";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";

type FormValues = {
  name: string;
  email: string;
  message: string;
  company?: string;
};

const ContactDialog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();

  const onSubmit = handleSubmit(async (values) => {
    try {
      const result = await sendContactMessage(values);
      if (!result.success) {
        setError("root", { message: result.error });
        return;
      }
      reset();
      setSubmitted(true);
    } catch {
      setError("root", { message: "Network error. Please try again." });
    }
  });

  return (
    <>
      <Button
        variant="default"
        size="lg"
        className="text-base px-5 cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        Get in touch
      </Button>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent
          className="sm:max-w-120 px-6 py-8 sm:px-10 bg-card ring-0 shadow! rounded-2xl max-h-[calc(100dvh-2rem)] overflow-y-auto"
          overlayClassName="bg-gray-200/90 dark:bg-background/90 backdrop-blur-sm"
          showCloseButton={false}
        >
          <DialogHeader>
            <DialogTitle className="font-semibold text-xl leading-tight">
              Get in touch
            </DialogTitle>
            <DialogDescription className="leading-tight! text-base">
              I&apos;m always looking to collaborate on interesting projects
              with great people. Need a supportive hand? I have two!
            </DialogDescription>
          </DialogHeader>
          {submitted ? (
            <div className="rounded-xl bg-foreground/5 px-4 py-6 text-center">
              <p className="font-medium">Thanks for reaching out!</p>
              <p className="mt-1 text-sm text-foreground/60">
                I&apos;ll get back to you soon.
              </p>
              <Button
                variant="secondary"
                className="mt-4 cursor-pointer"
                onClick={() => setSubmitted(false)}
              >
                Send another
              </Button>
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              className="flex flex-col gap-4"
              noValidate
            >
              {/* Honeypot: hidden from visitors, bots fill it and get filtered. */}
              <div
                aria-hidden="true"
                className="absolute left-[-9999px] size-px overflow-hidden"
              >
                <label htmlFor="contact-company">Company</label>
                <input
                  id="contact-company"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  {...register("company")}
                />
              </div>
              <Field data-invalid={!!errors.name}>
                <FieldLabel htmlFor="contact-name">Name</FieldLabel>
                <Input
                  id="contact-name"
                  autoComplete="name"
                  aria-invalid={!!errors.name}
                  disabled={isSubmitting}
                  {...register("name", { required: "Please enter your name." })}
                />
                {errors.name && <FieldError>{errors.name.message}</FieldError>}
              </Field>
              <Field data-invalid={!!errors.email}>
                <FieldLabel htmlFor="contact-email">Email</FieldLabel>
                <Input
                  id="contact-email"
                  type="email"
                  autoComplete="email"
                  aria-invalid={!!errors.email}
                  disabled={isSubmitting}
                  {...register("email", {
                    required: "Please enter your email.",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Please enter a valid email address.",
                    },
                  })}
                />
                {errors.email && (
                  <FieldError>{errors.email.message}</FieldError>
                )}
              </Field>
              <Field data-invalid={!!errors.message}>
                <FieldLabel htmlFor="contact-message">Message</FieldLabel>
                <Textarea
                  id="contact-message"
                  rows={4}
                  aria-invalid={!!errors.message}
                  disabled={isSubmitting}
                  {...register("message", {
                    required: "Please enter a message.",
                  })}
                />
                {errors.message && (
                  <FieldError>{errors.message.message}</FieldError>
                )}
              </Field>
              {errors.root && <FieldError>{errors.root.message}</FieldError>}
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="cursor-pointer w-max mt-2"
              >
                {isSubmitting ? "Sending…" : "Send message"}
              </Button>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ContactDialog;
