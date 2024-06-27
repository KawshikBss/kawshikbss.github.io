import React from "react";
import UserForm from "@/app/ui/pages/admin/user-form";
import SkillsForm from "@/app/ui/pages/admin/skills-form";
import ProjectsForm from "@/app/ui/pages/admin/projects-form";
import ExperienceForm from "@/app/ui/pages/admin/experience-form";

type Props = {};

async function Admin({}: Props) {
    const userRes = await fetch("http://localhost:3000/api/settings/user");
    const { user } = await userRes.json();
    const skillsRes = await fetch(
        `http://localhost:3000/api/settings/skill?userId=${user?._id ?? "0"}`
    );
    const skills = await skillsRes.json();
    const projectsRes = await fetch(
        `http://localhost:3000/api/settings/project?userId=${user?._id ?? "0"}`
    );
    const projects = await projectsRes.json();
    const experiencesRes = await fetch(
        `http://localhost:3000/api/settings/experience?userId=${
            user?._id ?? "0"
        }`
    );
    const experiences = await experiencesRes.json();

    return (
        <div>
            <UserForm user={user} />
            <SkillsForm user={user} skills={skills.data} />
            <ProjectsForm user={user} projects={projects.data} />
            <ExperienceForm user={user} experiences={experiences.data} />
        </div>
    );
}

export default Admin;
