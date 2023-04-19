import { ReactElement } from 'react';
import MetaData from '@/components/MetaData';
import Link from 'next/link';
import classNames from 'classnames';

PageNotFound.getLayout = function getLayout(page: ReactElement) {
    return (
        <>
            <div className="u-radialGradient" />
            <main id="content" className="relative flex justify-center items-center min-h-screen font-primary">
                {page}
            </main>
        </>
    );
};

export default function PageNotFound({
    className
}: {
    className: string;
}) {
    return (
        <>
            <MetaData
                title="404"
                description="You are lost in Space!"
            />
            <section className={classNames(className, 'font-primary w-full h-full')}>
                <div className="px-4">
                    <div className="max-w-[680px] mx-auto text-center">
                        <h1 className="font-bold text-xl text-white">Page not found</h1>
                        <div className="mt-1 px-10 text-sm text-white sm:text-base">
                            <p>The page you are looking for could not be found.</p>
                        </div>
                        <div className=" mt-8">
                            <Link
                                href="/"
                                className="inline-block py-2 px-4 rounded-lg bg-slate-900/40 text-white border hover:shadow-[0_0_15px_0_rgba(186,146,255,0.4)] transition-all duration-300"
                            >
                                Back to homepage
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};