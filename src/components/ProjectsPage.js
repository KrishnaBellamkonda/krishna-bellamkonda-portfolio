import React from 'react'
import SectionHeader from '../components/SectionHeader'
import ProjectSection from './ProjectSection'

// Logos 
import textSummarizerGIF from '../images/gifs/TextSummarizer.gif'
import wisdomOfCrowdsGIF from '../images/gifs/wisdom_of_crowds_simulation.gif'
import econoMetrics from '../images/gifs/EconoMetrics.gif'
import birthdayApplicationGIF from '../images/gifs/birthday_application.gif'
import miniSitesCollageGIF from '../images/gifs/websites_compilation.gif'
import goodReadsScrapingGIF from '../images/gifs/goodreads_scraping.gif'
import wildFirePredictionGIF from '../images/gifs/wildfire_prediction_reduced.gif'


export default function ProjectsPage() {
    return (
        <div className="page projects-page container flex-vertical gap-xxl" id="projects-page">
            <SectionHeader 
            sectionHeading = 'II - Projects'
            sectionNumber =  '2'
            alignment = 'section-number-align-start' 
            headerAlignment = 'align-start'
            />

            <ProjectSection 
            title = {"Text Summarizer"}
            desc = {"An AI application built over Google's BERT that produces an extractive summary of a text. It can embed upto 40 words in a sentence and produces a crisp and informative summaries."}
            tags = {["tensorflow", "nodejs", "numpy & pandas",  "expressjs", "docker"]}
            gif = {textSummarizerGIF}
            alt={"Text Summarizer"}
            button = {false}
            buttonHref = {""}
            href = {"https://github.com/KrishnaBellamkonda/text-summarizer"}
            />

            <ProjectSection 
            title = {"Wisom of Crowds"}
            desc = {"A randomized computer simulation is built to answer the question - Is the crowd more intelligent than each individual?”"}
            tags = {["python", "sklearn", "numpy & pandas",  "matplotlib", "seaborn"]}
            gif = {wisdomOfCrowdsGIF}
            alt={"Wisdom of Crowds"}
            button = {false}
            buttonHref = {""}
            href = {"https://github.com/KrishnaBellamkonda/wisdom-of-crowds-simulation"}
            />

            <ProjectSection 
            title = {"EconoMetrics"}
            desc = {"This is a web application that visualizes up-to-date information about economies around the world"}
            tags = {["reactjs", "chartjs", "matplotlib",  "numpy & pandas"]}
            gif = {econoMetrics}
            alt={"EconoMetrics"}
            button = {true}
            buttonHref = {"https://krishnabellamkonda.github.io/econo-metrics/"}
            href = {"https://github.com/KrishnaBellamkonda/econo-metrics"}
            />

            <ProjectSection 
            title = {"Birthday Application"}
            desc = {"An electron JS desktop application (built using react JS) that reminds you of upcoming birthdays and poses a randomized quiz. This application can be built to support any OS."}
            tags = {["electronjs", "reactjs", "numpy & pandas"]}
            gif = {birthdayApplicationGIF}
            alt={"Birthday Application"}
            button = {true}
            buttonHref = {"https://github.com/KrishnaBellamkonda/birthday-application-github-page"}
            href = {"https://github.com/KrishnaBellamkonda/birthday-application"}
            />

            <ProjectSection 
            title = {"Mini-Sites Collage"}
            desc = {"This is a collection of mini-projects that I made in the process of learning basic html, css and sass."}
            tags = {["Javascript","HTML", "SASS"]}
            gif = {miniSitesCollageGIF}
            alt={"Mini-sites Collage"}
            button = {true}
            buttonHref = {"https://krishnabellamkonda.github.io/mini-websites-compilation"}
            href = {"https://github.com/KrishnaBellamkonda/mini-websites-compilation"}
            />

            <ProjectSection 
            title = {"Wildfire Prediction Model"}
            desc = {"A randomized computer simulation is built to answer the question - Is the crowd more intelligent than each individual?”"}
            tags = {[ "sklearn", "numpy & pandas",  "matplotlib", "Linear Regression", "Random Forests"]}
            gif = {wildFirePredictionGIF}
            alt={"Wildfire Prediction Model"}
            button = {false}
            buttonHref = {""}
            href = {"https://github.com/KrishnaBellamkonda/wildfire-prediction-model-building"}
            />

            <ProjectSection 
            title = {"GoodReads Scraping"}
            desc = {"This is a web scrapng project that scrapes data on quotes from the Good Reads website."}
            tags = {[ "scrapy", "numpy & pandas",  "xpath"]}
            gif = {goodReadsScrapingGIF}
            alt={"Wildfire Prediction Model"}
            button = {false}
            buttonHref = {""}
            href = {"https://github.com/KrishnaBellamkonda/goodquotes-scraping"}
            />  




        </div>
    )
}
