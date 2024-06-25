import React, { useState } from 'react'

import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"


// importing components

import Header from '../src/Components/Common/Header.jsx'
import Footer from '../src/Components/Common/Footer.jsx'

import EmojiGrid from '../src/Components/Sections/EmojiGrid.jsx'

import AddEmoji from '../src/Components/Sections/AddEmoji.jsx'
const App = () => {

    let [emojies, setEmojies] = useState([
        {
            id: 1,
            icon: "🔥",
            name: "Fire Emoji",
            discription: "some discription data !"
        },
        {
            id: 2,
            icon: "👌",
            name: "Best",
            discription: "some discription data best !"
        },
        {
            id: 3,
            icon: "👋",
            name: "Hii",
            discription: "some discription data hii !"
        },
        {
            id: 4,
            icon: "✌️",
            name: "Victory",
            discription: "some discription data Victory !"
        }
    ])


    let callFromAdd = (emoji) => {
        // alert("called from Add Emojies")
        console.log("this is app.jsx and emoji is : ")
        console.log(emoji)
       
        setEmojies((prev) => {
            return (
                [...prev, emoji]
            )
        })
    }

    return (
        <>
            <Header />

            <AddEmoji call={callFromAdd} />

            {/* display all emojies */}

            <EmojiGrid data={emojies} />

            <Footer />
        </>
    )
}

export default App