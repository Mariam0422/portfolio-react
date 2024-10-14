const Contacts = () => {
    return ( 
        <main className="section">
        <div className="container">
                <h1 className="title-1">Contacts</h1>

                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Location</h2>
                        <p>Yerevan, Armenia</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Telegram / WhatsApp</h2>
                        <p style={{color: "#5c62ec"}}> +374 (97) 20-36-33</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Email</h2>
                        <p style={{color: "#5c62ec"}}>mariam79.yan@gmail.com</p>
                    </li>
                </ul>

        </div>
    </main>
     );
}
 
export default Contacts;