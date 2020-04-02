import React, { Component } from 'react';
import './App.css';

import connectionPNG from "./images/storytellingvis.png"
import vispyramidPNG from "./images/vispyramid.png"
class App extends Component {

  visualisationSection = {}
  introSection = {}

  storytellingVisSection = {}

  pastActivitiesSection = {}

  requiredSkillsSection = {}

  toolsAndTechniquesSection = {}
  componentWillMount() {

    this.introSection.title = "Introduction"
    this.introSection.paragraphs = []
    this.introSection.paragraphs[0] = {
      "title": "",
      "text": [
        "Visualisation and Storytelling are two powerful ways to get information across to an audience. Historically, both have been used for a long time and evolved from just vocal to modern times. The image of one person in the midst of an audience, telling a story and underlining it with drawings in the sand should be familiar to most people. ",
        "Humans remember things easier when they are accompanied by images. A good storyteller is valued for being able to construct images in people's minds, but it can be ever more powerful if real, meaningful images can be provided.",
        "In these modern, digital, online times powerful visualisations in 2D, 3D, VR, AR, on the web or in print are available and used on a daily basis. These can even be interactive. To master creating a compelling visualised story one needs to have the technical knowledge of the chosen medium, as well as the more creative knowledge of how to best get information across."
      ]
    }


    //visualisation
    this.visualisationSection.title = "Visualisation"
    this.visualisationSection.paragraphs = []
    this.visualisationSection.paragraphs[0] = {
      "title": "What is visualisation?",
      "text": [
        "Visualisation is used to display data in a way that a viewer can understand it, at a glance. This can be an extremely powerful tool to get data, information or ideas across to an audience.",
        "One of the most prominent visualisations is a chart, rather than raw table data. Without having to look at the real numbers, it is used to show information in relation to each other. There are a large variety of visualisation techniques to show different kinds of data. Picking the right visualisation for one's data can be a challenge and often needs careful consideration.  ",
        "The goal of a visualisation is to enable a person to gain knowledge from raw data and enable them to take action accordingly."
      
      ],
      "image":vispyramidPNG
    }
    this.visualisationSection.paragraphs[1] = {
      "title": "Visualisation: Types of media",
      "text": [
        "Traditional offline printed media mostly uses different kinds of charts to visualise data.",
        "Digital media offers a lot more depth. A simple chart can be elevated by tying it to a timeline and it updates as the timeline progresses in an animation or interactive application. 3D visualisations of more complex data is more easily displayed, as the user can turn a model on their screen. "
      ]
    }

    //story telling and vis
    this.storytellingVisSection.title = "Storytelling and Visualisation"
    this.storytellingVisSection.paragraphs = []
    this.storytellingVisSection.paragraphs[0] = {
      "title": "Connection",
      "text": [
        " Any Visualisation can be accompanied by a story, and most stories can benefit from some kind of visualisation. Both together can create an immersive, engaging way to get information taken from data across. ",
        " Having data visualised and narrated to an audience provides a much better understanding of the data, than just a narrative or just a vis. Both together enables change in the way of thinking, or even identify where underlying processes need to be changed to improve a situation."

      ],
      "image": connectionPNG
    }
    this.storytellingVisSection.paragraphs[1] = {
      "title": "Scrollytelling",
      "text": [
        "Scrollytelling is the technique of telling a story via scrolling a website. A lot of scrollytellers have popped up on the internet. The user scrolls through a narrative, which is accompanied by multiple visualisations of data. This works exceptionally well on both mobile devices and desktops. As the user scrolls, several aspects of a story can be highlighted with different graphics, an existing graphic can be updated based on the scrollposition, and there are many other creative ways of using this method.",
        "Since scrollytelling is browser based it is highly accessible. There exist a myriad or Javascript libraries to enable the developer to create engaging, interactive sites, augmented by visualisations."
      ]
    }

    this.storytellingVisSection.paragraphs[2] = {
      "title": "AR/VR and Storytelling",
      "text": [
        "Augmented Reality and Virtual Reality are both powerful visualisation tools and can both be used to tell a story very well. AR can be used to augment anything the user sees, for example when the user looks at a historical building, AR could provide historical context as in how it looked like hundreds of years ago.",
        "Virtual Reality can completely immerse the user in a virtual setting, which is predestined to enable storytelling in great measure. Rather than just looking at a visualisation of data, the user can actively explore it on their own or guided by a narrative.",
        "Both AR and VR need profound technical knowledge and the according hardware which makes them a little harder to access than other means."
      ]
    }

    //past acvitivies
    this.pastActivitiesSection.title = "Examples"
    this.pastActivitiesSection.paragraphs = []
    this.pastActivitiesSection.paragraphs[0] = {
      "title": "Scrollyteller",
      "text": [
        "Visualisation of the transformation of the power generation landscape in the UK (to be adapted for Australia if data becomes available). The user scrolls through the years much like a timeline. The power plants generating power are displayed on the map according to whether they are open or not in the current year, the dot size represents the capacity.",
        "This vis is engaging because it is a relatable topic which a lot of people find important and interesting. Seeing the transformation in this interactive way lets the user relate and understand cirucmstances. The 'story' here is a historical one based on facts. Just the text would be unappealing, and with just the map, it would be hard to understand WHY certain changes happened at any point in time.",
        "It is a Work in Progress and aims to be able to convert a more generic kind of dataset into a scrollyteller of this kind." 
      ],
      "link": {"url":"https://norahamacher.github.io/aussieElectro/", "iframe":false}
    }

    this.requiredSkillsSection.title = "Required Skills"
    this.requiredSkillsSection.paragraphs = []
    this.requiredSkillsSection.paragraphs[0] = {
      "title": "Visualisation skills",
      "text" : [
        "This highly depends on the chosen medium. Generally, there are a lot of tools to help visualise data. Tabular data can be converted to nice looking graphs within Google Sheets/Excel without any programming knowledge required.",
        "Across all platforms, skills of use are:",
        "Beginner: Excel, Google Sheets, Powerpoint/Slides",
        "Intermediate: Websites-Javascript, HTML, css to create a static site with images",
        "Advanced: Javascript libraries to enhance Web experiences and vis, AR/VR Programming"

      ]
    }
    this.requiredSkillsSection.paragraphs[1] = {
      "title": "Do's and Don'ts in vis",
      "text" : [
        "Do: Keep it as simple as possible, while still including everything needed.",
        "Do: Chose the correct visualisation for the data. This requires a bit of experience.",
        "Don't: Overcomplicate. Only include data and information that is relevant for what is needed. "

      ]
    }
    this.requiredSkillsSection.paragraphs[2] = {
      "title": "Storytelling skills",
      "text" : [
        "Telling an engaging story is a creative task, in relation to vis it is comparable to what a movie director or a comic writer does.",
        "It is important to keep the listener/reader engaged and not derive from the topic. Together with the visualisation, the story as a whole needs to make sense. As with vis, one should not include too many details that are not relevant.",
        "Generally, this is subject to the creator of the story. It sometimes enhances the story experience when there is a funny anecdote which does not directly have to do with the topic or the vis at hand."

      ]
    }

    //tools and techniques
    this.toolsAndTechniquesSection.title = "Tools and Techniques"
    this.requiredSkillsSection.paragraphs = []
    this.requiredSkillsSection.paragraphs[0] = {
      "text" : [
        "Beginner: Excel,Powerpoint, Plotting softwares, static website providers like wordpress etc to present.",
        "Intermediate: 'ABC oddyssey' framework to create a scrollyteller",
        "Advanced: ReactJS myriad of plugins, Google AR toolkit, MapboxGL for map visualisations, D3 to generate graphs on the web"
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <TutorialSection section={this.introSection} />
        <TutorialSection section={this.visualisationSection} />
        <TutorialSection section={this.storytellingVisSection} />
        <TutorialSection section={this.pastActivitiesSection} />
        <TutorialSection section={this.requiredSkillsSection} />
      </div>
    )
  }
}

const TutorialSection = ({ section }) => (
  <section className="tutorialSection">
    <h1>{section.title}</h1>
    {section.paragraphs.map(
      (paragraph, i) =>
        <div className="sectionParagraph" key={i}>
          <h3>{paragraph.title}</h3>
          {paragraph.text.map(
            (part, j) =>
          
                <p key={j}>
                  {part}
                </p>

          )}
          {paragraph.image ? <img className="paragraphImage" id="connectionImage" alt="connection" src={paragraph.image}></img> : ""}
          {paragraph.link ? paragraph.link.iframe ? <iframe src={paragraph.link.url}></iframe> : <a href={paragraph.link.url}>https://norahamacher.github.io/aussieElectro/</a> : "" }
        </div>
    )}
  </section>
)
export default App;
