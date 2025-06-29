
import { Button } from "@/components/ui/button";


import { ArrowLeftIcon } from "lucide-react";
import Link from 'next/link';


const NotFoundPage = () => {
    return (
        <main className="relative flex flex-col items-center justify-center px-4 h-dvh">
          
                    <div className="flex items-center justify-center h-full flex-col">
                        <span className="text-sm px-3.5 py-1 rounded-md bg-gradient-to-br from-sky-400 to-blue-600 text-neutral-50 custom-shadow">
                            404
                        </span>
                        <h1 className="text-3xl md:text-5xl font-bold mt-5">
                            Not Found
                        </h1>
                        <p className="text-base text-muted-foreground mt-5 text-center mx-auto max-w-xl">
                            This page doesn&apos;t exist. Please check the URL and try again.
                        </p>
                        <Link href="/">
                            <Button variant="subtle" className="mt-8">
                                <ArrowLeftIcon className="size-4" />
                                Back
                            </Button>
                        </Link>
                    </div>

        </main>
    )
};

export default NotFoundPage;
