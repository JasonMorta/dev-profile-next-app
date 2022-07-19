import Image from 'next/image'
import Layout from '../components/Layout'

const projects = [
            {
               "img": "/../static/images/cardGame.jpg",
               "name": "React Card Game",
               "des":   "Built a React game and hosted in on Heroku"
            },
            {
               "img": "/../static/images/iTunesMusicAPI.jpg",
               "name": "iTunes Music API",
               "des":   "React App that  make suse of the itunes API, and allows a user to find media content in the apple store."
            },
            {
               "img": "/../static/images/onlineStore.jpg",
               "name": "Online Store",
               "des":   "This store was make using HTM, CSS and JS. A user can add items to the cars, and make cart updates. Card data is saved in localStorage"
            },
         ]

         const list = projects.map(item =>(
            <div className="card">
               <Image  src={item.img} alt="screenshot" width={300} height={300}/>
               <div className="container">
                  <h4><b>{item.name}</b></h4> 
                  <p>{item.des}</p> 
               </div>
               </div>
         ))

export default() => (
      <Layout>

      <div className="project-page">
         <h1>My Projects</h1>
        <div className="all-cards-container">
            <div className="cards">
               {list}
               </div>
        </div>
      </div>
      </Layout>
   )
