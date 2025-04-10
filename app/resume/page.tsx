import { NextPage } from 'next';

const Resume: NextPage = () => {
    return (
        <div className="max-w-3xl mx-auto p-8 font-sans min-h-screen">
            <header className="text-center mb-8">
                <h1 className="text-4xl font-bold mb-2">Matthew Dennis</h1>
                <p className="text-lg text-gray-500">
                    mdennis1318@gmail.com | 586-871-3394 | www.linkedin.com/in/matthewdennis18
                </p>
            </header>

            <section className="mb-8">
                <h2 className="text-3xl font-semibold mb-4">Experience</h2>
                <div className="mb-4">
                    <h3 className="text-2xl font-medium">Founding Engineer - Tandem, Inc</h3>
                    <p className="text-gray-500">
                        <strong>December 2021 - Present</strong>
                    </p>
                    <ul className="list-disc list-outside pl-10">
                        <li>Developed and launched from MVP to production as the initial engineering hire, directly contributing to 130k+ signups, 9.5k monthly active users, and over 14 million imported transactions</li>
                        <li>Oversaw the growth of an engineering team from 1 to 3 engineers, optimizing team expertise and ensuring efficient collaboration</li>
                        <li>Strategically prioritized and managed engineering workflows alongside co-founders, balancing feature delivery speed with proactive technical debt management</li>
                        <li>Architected the backend migration to AWS CDK and transitioned the codebase from JavaScript to TypeScript, significantly enhancing system reliability, scalability, and reducing runtime errors</li>
                        <li>Built a native iOS app utilizing SwiftUI and Composable Architecture, securely integrating Plaid, Stripe, and other 3rd party financial technologies to enable reliable financial data management for users</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-2xl font-medium">Software Development Engineer II - Amazon.com, Inc</h3>
                    <p className="text-gray-500">
                        <strong>July 2019 - December 2021</strong>
                    </p>
                    <ul className="list-disc list-outside pl-10">
                        <li>Scaled from 3 to over 110 retail locations, efficiently managing price updates for 800k+ Electronic Shelf Label (ESL) tags and streamlining the store-launch process, resulting in approximately 60% reduced deployment time</li>
                        <li>Enhanced operational excellence by systematically reducing a backlog of 150+ aging tickets to a manageable volume of 15-20 high-priority issues</li>
                        <li>Led the launch of ESLs in a new store format by designing and implementing a Java-based microservice, enabling dynamic representation of multiple products and QR code integrations for seamless in-app experiences</li>
                        <li>Engineered expanding ESL operations internationally to stores in the UK and Germany, effectively handling localized pricing, currency conversions, and multilingual support with scalable architecture</li>
                    </ul>
                </div>
            </section>

            <section className="mb-8">
                <h2 className="text-3xl font-semibold mb-4">Education</h2>
                <div>
                    <h3 className="text-2xl font-medium">Bachelor of Science, Computer Science</h3>
                    <p className="text-gray-500">Michigan State University, 2015 - 2019</p>
                </div>
            </section>

            <section className="mb-8">
                <h2 className="text-3xl font-semibold mb-4">Skills</h2>
                <h3 className="text-2xl font-medium mb-2">Languages</h3>
                <ul className="list-disc list-inside pl-5">
                    <li>TypeScript</li>
                    <li>Swift</li>
                    <li>Java</li>
                    <li>Python</li>
                    <li>Kotlin</li>
                </ul>
                <h3 className="text-2xl font-medium mb-2 mt-4">Frameworks/Libraries</h3>
                <ul className="list-disc list-inside pl-5">
                    <li>Spring</li>
                    <li>Node.js</li>
                    <li>SwiftUI</li>
                    <li>GraphQL</li>
                </ul>
                <h3 className="text-2xl font-medium mb-2 mt-4">Cloud/Infrastructure</h3>
                <ul className="list-disc list-inside pl-5">
                    <li>AWS (CDK, DynamoDB, CodePipeline, ECS, Lambda, IAM, S3)</li>
                    <li>Docker</li>
                    <li>MongoDB</li>
                </ul>
            </section>
        </div>
    );
};

export default Resume;
