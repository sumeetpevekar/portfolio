"use client";

import { useForm } from "react-hook-form";
import styles from "./styles.module.css";
import { useToast } from "@/hooks/use-toast";
import axios from "axios";

interface ContactFormData {
    name: string;
    email: string;
    message: string;
}

const Contact: React.FC = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<ContactFormData>();

    const { toast } = useToast();

    const onSubmit = async (data: ContactFormData) => {
        try {
            const response = await axios.post("/api/contact", data);

            if (response.status === 200) {
                reset();
                toast({
                    title: "Success",
                    description: "Your message has been sent.",
                });
            } else {
                throw new Error("Failed to send message");
            }
        } catch (error : any) {
            toast({
                variant: "destructive",
                title: "Error" ,
                description: error.message || "Failed to send message",
            });
        }
    };

    return (
        <div className={styles.parentContainer}>
            <div className={styles.containerCtc}>
                <div className={styles.titleSectionAbt}>
                    <span className={styles.titleAbt}>CONTACT</span>
                    <span className={styles.space}></span>
                    <span className={styles.subtitleAbt}>ME</span>
                </div>

                <div className={styles.formContainer}>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className={styles.form}
                    >
                        <div className={styles.inputGroup}>
                            <input
                                type="text"
                                placeholder="Name"
                                {...register("name", {
                                    required: "Name is required",
                                })}
                                className={styles.input}
                            />
                            {errors.name && (
                                <span className={styles.error}>
                                    {errors.name.message}
                                </span>
                            )}
                        </div>

                        <div className={styles.inputGroup}>
                            <input
                                type="email"
                                placeholder="Email"
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "Invalid email address",
                                    },
                                })}
                                className={styles.input}
                            />
                            {errors.email && (
                                <span className={styles.error}>
                                    {errors.email.message}
                                </span>
                            )}
                        </div>

                        <div className={styles.inputGroup}>
                            <textarea
                                placeholder="Message"
                                {...register("message", {
                                    required: "Message is required",
                                })}
                                className={styles.textarea}
                                rows={5}
                            />
                            {errors.message && (
                                <span className={styles.error}>
                                    {errors.message.message}
                                </span>
                            )}
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={styles.submitButton}
                        >
                            {isSubmitting ? "Sending..." : "Send Message"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
