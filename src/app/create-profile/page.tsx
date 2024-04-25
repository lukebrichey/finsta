"use client"

import React from 'react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

// shadcn ui imports
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
    username: z.string().min(2).max(20),
    displayName: z.string(),
    bio: z.string().max(100).optional(),
});

const ProfileForm = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            displayName: "",
            bio: "",
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
    };

    return (
        <div className="flex flex-col items-center">
            <h1 className="font-bold p-2 mt-6 text-xl">
                Create Profile
            </h1>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 p-6 rounded-lg shadow w-1/2">
                    <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel className="text-white">Username</FormLabel>
                        <FormControl>
                            <Input placeholder="user123" className="bg-black text-gray-400 border-2 p-2 rounded" {...field} />
                        </FormControl>
                        <FormDescription className="text-gray-500">
                            This is your Finsta handle.
                        </FormDescription>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={form.control}
                    name="displayName"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel className="text-white">Display Name</FormLabel>
                        <FormControl>
                            <Input placeholder="Luke Richey" className="bg-black text-gray-400 border-2 p-2 rounded" {...field} />
                        </FormControl>
                        <FormDescription className="text-gray-500">
                            This is your public display name.
                        </FormDescription>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={form.control}
                    name="bio"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel className="text-white">Bio</FormLabel>
                        <FormControl>
                            <Input placeholder="I'm a student" className="bg-black text-gray-400 border-2 p-2 rounded" {...field} />
                        </FormControl>
                        <FormDescription className="text-gray-500">
                            This is your bio, tell us about yourself (within 100 characters).
                        </FormDescription>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <Button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Submit
                    </Button>
                </form>
            </Form>
        </div>
    );
};

export default ProfileForm;