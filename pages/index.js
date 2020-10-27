import Head from "next/head";
import Link from "next/link";
import {
    UnorderedList,
    ListItem,
    ListItemImage,
    Title,
    SubTitle,
} from "../public/styles/cssComponents";

type Operator = {
    titel: string;
    icon: string;
};

const operatorsList: Operator[] = [
    { title: "МТС", icon: "/images/MTS.png" },
    { title: "Билайн", icon: "/images/beeline.png" },
    { title: "Мегафон", icon: "/images/megafon.png" },
];

export default function Home() {
    return (
        <div className="container">
            <Head>
                <title>Brave Developers test task</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <Title>Добро пожаловать!</Title>
                <SubTitle>Выберете мобильного оператора:</SubTitle>
                <UnorderedList>
                    {operatorsList.map((item, id) => (
                        <ListItem key={id}>
                            <Link
                                href="/payment/[OperatorForm]"
                                as={`/payment/${item.title}`}
                            >
                                <ListItemImage
                                    src={item.icon}
                                    alt={item.title}
                                />
                            </Link>
                        </ListItem>
                    ))}
                </UnorderedList>
            </main>

            <style jsx>{`
                .container {
                    min-height: 100vh;
                    padding: 0 0.5rem;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }

                main {
                    padding: 5rem 0;
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }
            `}</style>

            <style jsx global>{`
                html,
                body {
                    padding: 0;
                    margin: 0;
                    font-family: -apple-system, BlinkMacSystemFont, Segoe UI,
                        Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
                        Helvetica Neue, sans-serif;
                }

                * {
                    box-sizing: border-box;
                }
            `}</style>
        </div>
    );
}
