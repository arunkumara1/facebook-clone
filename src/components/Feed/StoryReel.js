import React from 'react'
import './StoryReel.css';
import Story from './Story';

const StoryReel = () => {
    return (
        <div className="storyReel">

            {/* Story */}
            <Story image="https://firebasestorage.googleapis.com/v0/b/instagram-clone-app-76737.appspot.com/o/images%2Frahman.jpg?alt=media&token=719590da-6e8e-4867-8606-b6dcbd842837"
                profilePic="https://firebasestorage.googleapis.com/v0/b/instagram-clone-app-76737.appspot.com/o/images%2F12_08_2020-dhoni8_20619565.jpg?alt=media&token=19f4d73c-0c25-4408-8ff8-d2cd1ac07e66"
                title="Arun"
            />

            <Story image="https://www.realmofhistory.com/wp-content/uploads/2018/03/10-mythical-dragon-entities-facts_11.jpg"
                profilePic="https://firebasestorage.googleapis.com/v0/b/instagram-clone-app-76737.appspot.com/o/images%2F12_08_2020-dhoni8_20619565.jpg?alt=media&token=19f4d73c-0c25-4408-8ff8-d2cd1ac07e66"
                title="Zaid"
            />

            <Story image="https://i.pinimg.com/474x/4d/d8/87/4dd8874c58145397a2e0f94df7387d83--la-nature-beautiful-things.jpg"
                profilePic="https://firebasestorage.googleapis.com/v0/b/instagram-clone-app-76737.appspot.com/o/images%2F12_08_2020-dhoni8_20619565.jpg?alt=media&token=19f4d73c-0c25-4408-8ff8-d2cd1ac07e66"
                title="Geetha"
            />

            <Story image="https://c.ndtvimg.com/2020-07/m7opt04g_ms-dhoni-afp_625x300_06_July_20.jpg"
                profilePic="https://firebasestorage.googleapis.com/v0/b/instagram-clone-app-76737.appspot.com/o/images%2F12_08_2020-dhoni8_20619565.jpg?alt=media&token=19f4d73c-0c25-4408-8ff8-d2cd1ac07e66"
                title="Geetha"
            />

            <Story image="https://imgk.timesnownews.com/story/Virat_Kohli_pays_another_tribute_to_MS_Dhoni.jpg?tr=w-1200,h-900"
                profilePic="https://firebasestorage.googleapis.com/v0/b/instagram-clone-app-76737.appspot.com/o/images%2F12_08_2020-dhoni8_20619565.jpg?alt=media&token=19f4d73c-0c25-4408-8ff8-d2cd1ac07e66"
                title="Geetha"
            />

        </div>
    )
}

export default StoryReel;
