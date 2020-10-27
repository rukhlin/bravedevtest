import Router, { useRouter, FC } from "next/router";
import Head from "next/head";
import {
    Label,
    Input,
    DivBackground,
    Button,
} from "../../public/styles/cssComponents";

type ResponseType = { /* some type of response */ }

export const OperatorForm:FC = () => {
    const router = useRouter();
    const { OperatorForm } = router.query;

    const onPayClick = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        const requestOptions = {
            method: "POST",
            body: new FormData(e.target),
        };
        // interaction with api is better to move to other modules
        fetch("/api/payment", requestOptions).then(async (response: ResponseType) => {
            const json = await response.json();
            alert(json.title);
            if (response.ok) Router.back();
        });
    };

    return (
        <div className="container">
            <Head>
                <title>Brave Developers окно оплаты</title>
                <link
                    href="https://fonts.googleapis.com/css2?family=Spartan&display=swap"
                    rel="stylesheet"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <DivBackground>
                    <Button
                        onClick={() => Router.back()}
                        style={{ marginBottom: "24pt" }}
                    >
                        Назад
                    </Button>
                    <form onSubmit={onPayClick}>
                        <Label htmlFor="customerOperator">
                            Ваш выбранный оператор
                        </Label>
                        <em>*</em>
                        <Input
                            type="text"
                            id="customerOperator"
                            name="customerOperator"
                            value={OperatorForm}
                            readOnly
                            required
                        />
                        <Label htmlFor="customerPhone">Ваш телефон</Label>
                        <em>*</em>
                        <Input
                            type="tel"
                            id="customerPhone"
                            name="customerPhone"
                            pattern="7[0-9]{10}"
                            placeholder="71234567890"
                            maxLength="11"
                            required
                        />
                        <Label htmlFor="customerMoney">
                            Введите сумму (максимум 1000₽)
                        </Label>
                        <em>*</em>
                        <Input
                            type="number"
                            id="customerMoney"
                            name="customerMoney"
                            min="1"
                            max="1000"
                            required
                        />
                        <Button type="submit">Оплатить</Button>
                    </form>
                </DivBackground>
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
                * {
                    font-family: "Spartan", sans-serif;
                }
                em {
                    color: red;
                }
            `}</style>
        </div>
    );
}

export default OperatorForm
