import React from 'react';
import './About.scss';

function About() {
  return (
    <section className="about-section">
      <div className="container">
        <div className="row">

          {/* Colonne À propos */}
          <div className="col-12 col-md-6 mb-4 mb-md-0">
            <h2>À propos de moi</h2>
            <div className="col-divider"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam convallis ex ac velit scelerisque consectetur. 
              Sed tincidunt fringilla augue, dictum hendrerit arcu vehicula nec. 
              Etiam a tempor sapien, ac accumsan metus. Vivamus felis velit, lobortis in sem in, porttitor aliquam augue. 
              Integer rhoncus congue cursus. Donec sed enim augue. Cras sit amet lorem in turpis pulvinar maximus in tempor velit. 
              Aliquam a risus tincidunt, pellentesque mi quis, fringilla magna. Sed at lobortis nisi. 
              Nam tempor, ante eget blandit egestas, nisi elit scelerisque lorem, nec vehicula dolor nisi vitae nisl. 
              Donec condimentum, dolor ac ultricies convallis, dolor arcu pulvinar turpis, vitae consequat lacus sapien vel lorem. 
              Morbi ante lacus, porttitor et massa a, rhoncus tristique lectus. 
              Sed porta justo et neque convallis, sed bibendum mauris accumsan. 
            </p>
          </div>

          {/* Colonne Compétences */}
          <div className="col-12 col-md-6">
            <h2>Mes compétences</h2>
            <div className="col-divider"></div>

            <div className="skill mt-3">
              <div className="d-flex justify-content-between">
                <span>HTML5</span><span>90%</span>
              </div>
              <div className="progress">
                <div className="progress-bar bg-danger" style={{ width: '90%' }}></div>
              </div>
            </div>

            <div className="skill mt-3">
              <div className="d-flex justify-content-between">
                <span>CSS3</span><span>80%</span>
              </div>
              <div className="progress">
                <div className="progress-bar bg-info" style={{ width: '80%' }}></div>
              </div>
            </div>

            <div className="skill mt-3">
              <div className="d-flex justify-content-between">
                <span>JavaScript</span><span>70%</span>
              </div>
              <div className="progress">
                <div className="progress-bar bg-warning" style={{ width: '70%' }}></div>
              </div>
            </div>

            <div className="skill mt-3">
              <div className="d-flex justify-content-between">
                <span>PHP</span><span>60%</span>
              </div>
              <div className="progress">
                <div className="progress-bar bg-success" style={{ width: '60%' }}></div>
              </div>
            </div>

            <div className="skill mt-3">
              <div className="d-flex justify-content-between">
                <span>React</span><span>50%</span>
              </div>
              <div className="progress">
                <div className="progress-bar bg-primary" style={{ width: '50%' }}></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;