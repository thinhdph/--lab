import React from 'react'

export default function Contact() {
    return (
        <form >
            <input
                type="text"
                placeholder="Name"
                // value={name}
                // onChange={(e) => setName(e.target.value)}
            />

            <input
                type="email"
                placeholder="Email"
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
            />

            <textarea
                placeholder="Message"
                // value={message}
                // onChange={(e) => setMessage(e.target.value)}
            ></textarea>

            <button type="submit">Send</button>
        </form>
    );
}
