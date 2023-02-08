import React, { Component } from "react";
import ProjectCard from "./ProjectCard";
import "./Projects.css";

class Projects extends Component {
  render() {
    const ProjectsData = [
      {
        name: "Mas Kost App",
        image: "./images/maskost.png",
        description:
          "Mas kost adalah aplikasi berbasis website berupa marketplace. Sistem Marketplace ini yang di khususkan untuk jasa menyewakan dan menyewa kost. Aplikasi ini dibuat dalam rangka project skripsi kampus.",
        demo: "https://kost.bimanagantara.live/",
        stack: ["codeigniter 3", "midtrans", "bootstrap"],
        github: "https://github.com/saddanbimanagantara/final-maskost",
      },
      {
        name: "E-Voting App",
        image: "./images/evoting.png",
        description:
          "E-Voting adalah aplikasi pemilihan online. Aplikasi ini diberikan fitur live count untuk memberikan perhitungan suara secara realtime. Aplikasi ini dibuat dalam rangka project kuliah kampus.",
        stack: ["codeigniter 3", "bootstrap"],
        demo: false,
        github: "https://github.com/saddanbimanagantara/CI3-E-Voting",
      },
      {
        name: "Si Gudang App",
        image: "./images/sigudangobat.png",
        description:
          "SI Gudang Obat adalah aplikasi berbasis website yang digunakan untuk mengelola data obat pada suatu puskesmas, Project ini dibuat saat kegiatan magang kuliah.",
        stack: ["codeigniter 3", "bootstrap"],
        demo: false,
        github: "https://github.com/saddanbimanagantara/si_farmasi_ci",
      },
      {
        name: "Si Organisasi",
        image: "./images/siorganisasi.png",
        description:
          "Si Organisasi adalah aplikasi sistem informasi berbasis website. Aplikasi ini mencakup pengelolaan keuangan kas organisasi dan kegiatan pengumpulan dana tabungan kurban warga.Aplikasi ini dibuat dalam rangka project kuliah kampus.",
        stack: ["codeigniter 3", "bootstrap"],
        demo: false,
        github: "https://github.com/saddanbimanagantara/SI_IPMPK",
      },
      {
        name: "Rest API Kost",
        image: "./images/restkost.png",
        description:
          "Rest API Kost adalah aplikasi rest api yang tujuannya dulu untuk belajar rest api. Api ini berisi informasi kost. Aplikasi ini dibuat dalam rangka project kuliah kampus.",
        stack: ["codeigniter 3"],
        demo: false,
        github: "https://github.com/saddanbimanagantara/rest-kost",
      },
      {
        name: "To Do App",
        image: "./images/todo.png",
        description:
          "To Do App adalah aplikasi untuk sebuah perencanaan sederhana. Aplikasi ini dibuat sebagai project belajar firebase.",
        stack: ["firebase"],
        demo: false,
        github: "https://github.com/saddanbimanagantara/todo-app-firebase",
      },
    ];
    return (
      <div className="project-container">
        <div className="project">
          {ProjectsData.map((item, key) => {
            return (
              <ProjectCard
                key={key}
                name={item.name}
                description={item.description}
                image={item.image}
                stack={item.stack}
                demo={item.demo}
                github={item.github}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Projects;
