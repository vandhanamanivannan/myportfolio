import React, { Component } from 'react'

export default class Projects extends Component {
  render() {
    return (
        <div className='project'>
          <section id="projects">
          <div className="proj-title">Noteworthy Projects</div>

            <div className='project-card'>
              <div className='project-container'>
                <div className="proj-name">Algorithm Visualizer &nbsp;
                {/* <span><a href="#"><i class="bi bi-box-arrow-up-right"></i></a></span> */}
                </div>
                <p className='proj-desc'>Built a React application to visualize different sorting algorithms. Implemented  Merge Sort, Quick Sort, Heap Sort, and Bubble Sort. Users can observe how the algorithms rearrange a set of data in real-time and how they compare to one another.</p>
                <div className='proj-used'>
                  <span className='proj-tech'>react</span>
                </div>
                <div className='proj-used'>
                  <span className='proj-tech'>html</span>
                </div>
                <div className='proj-used'>
                  <span className='proj-tech'>css</span>
                </div>
              </div>
            </div>


            <div className='project-card'>
              <div className='project-container'>
                <div className="proj-name">Data analysis & data retrieval performance optimization using Redis &nbsp; 
                {/* <span><a href="#"><i class="bi bi-box-arrow-up-right"></i></a></span> */}
                </div>
                <p className='proj-desc'>Developed a Flask web application that can analyze any given dataset, importing it into either an SQL database on the Azure cloud. The application also provides a web interface that enables users to query and retrieve information from the dataset. Evaluated the performance of the application and enhanced its ability to retrieve data using Redis with efficiency rate of approximately 95%</p>
                <div className='proj-used'>
                  <span className='proj-tech'>Python</span>
                </div>
                <div className='proj-used'>
                  <span className='proj-tech'>Flask</span>
                </div>
                <div className='proj-used'>
                  <span className='proj-tech'>Redis</span>
                </div>
                <div className='proj-used'>
                  <span className='proj-tech'>Azure</span>
                </div>
                <div className='proj-used'>
                  <span className='proj-tech'>html</span>
                </div>
              </div>
            </div>

            <div className='project-card'>
              <div className='project-container'>
                <div className="proj-name">Early Detection of Alzheimer’s using Machine Learning Model &nbsp; 
                {/* <span><a href="#"><i class="bi bi-box-arrow-up-right"></i></a></span> */}
                </div>
                <p className='proj-desc'>Designed a model that can anticipate the initial signs of Alzheimer's disease using test data. To accomplish this, I utilized machine learning and deep learning algorithms like SVM and RFM to examine and predict the likelihood of the disorder. The model was able to achieve an accuracy rate of approximately 80%.</p>
                <div className='proj-used'>
                  <span className='proj-tech'>Python</span>
                </div>
              </div>
            </div>

            <div className='project-card'>
              <div className='project-container'>
                <div className="proj-name">Search engine using Azure Cloud services &nbsp; 
                {/* <span><a href="#"><i class="bi bi-box-arrow-up-right"></i></a></span> */}
                </div>
                <p className='proj-desc'>Built a Flask web application that searches based on words or word combinations to find relevant documents on the Azure cloud. The search output includes the name of the document and the exact location within it where the search term is present (e.g. line number or offset). Achieved expected search time complexity.</p>
                <div className='proj-used'>
                  <span className='proj-tech'>Python</span>
                </div>
                <div className='proj-used'>
                  <span className='proj-tech'>Flask</span>
                </div>
                <div className='proj-used'>
                  <span className='proj-tech'>Azure</span>
                </div>
                <div className='proj-used'>
                  <span className='proj-tech'>html</span>
                </div>
              </div>
            </div>
          </section> 
        </div>
    ) } }