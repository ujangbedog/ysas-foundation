"use client";

import { useState, type FormEvent } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";

import { TextInput, SelectInput } from "../../Input";
import { eInputTheme } from "../../Input/input";
import { Button } from "../../Button";

import styles from "./Contact.module.scss";

import { api } from "~/src/trpc/react";

export const Contact = ({ hasSelect = true, pageType = "contact-us" }) => {
  const t = useTranslations(pageType);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState(hasSelect ? "" : t("options.therapy"));
  const [isSending, setSending] = useState(false);
  const [isSent, setSent] = useState(false);
  const [isError, setError] = useState(false);
  const [isSubjectError, setSubjectError] = useState(false);

  const sendEmailMutation = api.mailing.sendEmail.useMutation();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (subject === "") {
      return setSubjectError(true);
    }

    setSending(true);

    if (!isSent && !isError) {
      await sendEmailMutation.mutateAsync({
        name: name,
        email: email,
        lastname: lastName,
        subject: subject,
      });
    }

    setSending(false);
    setSent(true);

    try {
    } catch (error) {
      setSending(false);
      setError(true);
      alert(
        `Oops! Something went wrong with the contact form.\n Please try again later.`
      );
    }

    setName("");
    setLastName("");
    setEmail("");
    setSubject("");

    setTimeout(() => {
      setSent(false);
      setError(false);
    }, 1000 * 5);
  };

  const formData = [
    {
      input: "name",
      value: name,
      type: "text",
      setFunction: setName,
    },
    {
      input: "last-name",
      value: lastName,
      type: "text",
      setFunction: setLastName,
    },
    {
      input: "email",
      value: email,
      type: "email",
      setFunction: setEmail,
    },
  ] as const;

  const selectOptions = [
    "workshop",
    "good-practice",
    "therapy",
    "collaborate",
  ] as const;

  return (
    <article className={styles.contact}>
      <div className={styles.contact__content}>
        <h2 className={styles.contact__content__title}>{t("title")}</h2>
        <p className={styles.contact__content__body}>{t("description")}</p>
      </div>
      
      <Image
        className={styles["contact__paint-top"]}
        src="/paints/contact-top.png"
        alt="Paint splatter decoration"
        width={220}
        height={120}
      />
      <Image
        className={styles["contact__paint-bottom"]}
        src="/paints/contact-bottom.png"
        alt="Paint splatter decoration"
        width={360}
        height={200}
      />
    </article>
  );
};
