<svelte:head>
    <link href='https://fonts.googleapis.com/css?family=Open Sans' rel='stylesheet'>
</svelte:head>

<footer>
    <div class="contact">
        <a href="/contact">Contact Us</a>
    </div>
    <div class="charter">
        <a href="/nyccharter">NYC Charter §1061</a>
        <a href="https://pubadvocate.nyc/copic-nyc/" target="_blank" rel="noopener noreferrer">Theo Chino's Message</a>
    </div>
    <div class="social">
        <div>Stay Connected</div>
        <div class="icons">
            <a href="https://twitter.com/copicnyc?lang=en" target="_blank" rel="noopener noreferrer">
                <img src="https://static.vecteezy.com/system/resources/thumbnails/034/716/139/small/x-new-twitter-logo-free-png.png" alt="Twitter">
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/768px-Instagram_icon.png" alt="Instagram">
            </a>
            <a href="https://www.facebook.com/p/COPIC-100072326781250/" target="_blank" rel="noopener noreferrer">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkLcBrDHgOj0B_qrNTygXlcjOPlRfGOBqZrw&s" alt="Facebook">
            </a>
        </div>
    </div>
</footer>

<style>
    footer {
        display: grid;
        grid-template-columns: auto auto auto;
        text-align: center;
        align-items: center;
        min-height: 200px;
        background-color: #2F56A6;
        font-family: "Open Sans", "Helvetica Neue", Helvetica, Roboto, Arial, sans-serif;
        color: white;
    }

    .contact {
        display: flex;
        flex-direction: column;
        font-size: 1.3rem;
    }

    a {
        color: white;
    }

    .charter {
        display: flex;
        flex-direction: column;
        row-gap: 20px;
        font-size: 1.3rem;
    }

    .social {
        display: flex;
        flex-direction: column;
        font-size: 1.3rem;
    }

    .icons {
        display: flex;
        flex-direction: row;
        justify-content: center;
        padding: 5px;
    }

    img {
        width: 50px;
        height: 50px;
    }

    @media screen and (max-width: 700px) {
        footer {
            grid-template-columns: none;
            grid-template-rows: auto auto auto;
        }

        .contact, .charter, .social {
            font-size: 1.1rem;
        }

        img {
            width: 40px;
            height: 40px;
        }
    }
</style>