<svelte:head>
    <title>Contact Us</title>
    <link href='https://fonts.googleapis.com/css?family=Open Sans' rel='stylesheet'>
</svelte:head>

<section>
    <div class="contact" id="contact">
        <h1>
            Contact Us
        </h1>
        <form method="POST">
            <div class="name">
                <div class="firstname">
                    <label for="fn"><b>First Name<strong>*</strong></b></label>
                    <input type="text" name="First Name" id="fn" required>
                </div>
                <div class="lastname">
                    <label for="ln"><b>Last Name<strong>*</strong></b></label>
                    <input type="text" name="Last Name" id="ln" required>
                </div>
            </div>
            <div class="email">
                <label for="em"><b>Email Address</b></label>
                <input type="email" name="Email" id="em">
            </div>
            <div class="phone">
                <label for="ph"><b>Phone Number</b></label>
                <input type="tel" name="Phone Number" id="ph">
            </div>
            <div class="message">
                <label for="ms"><b>Message<strong>*</strong></b></label>
                <textarea name="Message" id="ms" required></textarea>
            </div>
            <div class="astexp">
                <strong>*</strong>Required fields
            </div>
            <button type="submit">
                Submit
            </button>
        </form>
    </div>
</section>

<style>

    section {
        margin-bottom: 50px;
    }

    h1 {
        font-size: 2rem;
        font-weight: 600;
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    }

    form {
        margin-left: 200px;
        margin-right: 200px;
        padding: 10px;
        display: flex;
        flex-direction: column;
        font-family: "Open Sans", "Helvetica Neue", Helvetica, Roboto, Arial, sans-serif;
        background-color: #F9F9F9;
        border: 1px solid black;
        border-radius: 10px;
    }

    .name {
        display: flex;
        flex-direction: row;
        margin-bottom: 30px;
    }

    .firstname {
        display: flex;
        flex-direction: column;
        margin-right: 20px;
    }

    strong {
        color: red;
    }

    #fn, #ln, #em, #ph {
        height: 25px;
    }

    .lastname {
        display: flex;
        flex-direction: column;
    }

    .email {
        display: flex;
        flex-direction: column;
        margin-bottom: 30px;
    }

    #em {
        width: 405px;
    }

    .phone {
        display: flex;
        flex-direction: column;
        margin-bottom: 30px;
    }

    #ph {
        width: 188px;
    }

    .message {
        display: flex;
        flex-direction: column;
        margin-bottom: 30px;
    }

    #ms {
        height: 100px;
        font-family: "Open Sans", "Helvetica Neue", Helvetica, Roboto, Arial, sans-serif;
    }

    .astexp {
        margin-bottom: 30px;
    }

    button {
        margin: auto;
        margin-bottom: 10px;
    }

    @media screen and (max-width: 900px) {
        .name {
            display: flex;
            flex-direction: column;
        }

        .firstname {
            margin-bottom: 30px;
        }

        .lastname {
            width: 320px;
        }

        #em {
            width: 312px;
            padding: 1px 2px 1px 2px; 
        }
    }

    @media screen and (max-width: 700px) {
        .contact {
            width: 100%;
            display: flex;
            flex-direction: column;
        }

        form {
            width: 90%;
            align-self: center;
        }
    }
</style>