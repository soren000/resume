import React from 'react';
import { Page, Text, View, Document, Link, Image } from '@react-pdf/renderer';
import styles from '../styles/main';
import '../styles/main.scss'
import SideSectionCategory from './SideSectionCategory';
import udemyLogo from '../udemy-logo.png';
import Project from './Project';
import Course from './Course';
import { projects, sideSectionCategories, courses } from '../data';


const PDFDocument = () => (
    <Document>
        <Page wrap style={styles.page}>
            <View style={styles.pageContainer}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Soren</Text>
                    <Text style={styles.headerSubtitle}>Web Developer</Text>
                </View>
                <View style={styles.sideSection}>
                    {sideSectionCategories.map((category, index) => <SideSectionCategory key={index} title={category.title} items={category.items}/>)}
                </View>
                <View style={styles.mainSection}>
                    <View style={styles.mainSectionCategory}>
                        <Text style={styles.mainSectionCategoryTitle}>Introduction</Text>
                        <Text style={styles.mainSectionCategoryItem}>I am currently seeking a position as a Junior Web Developer in a team that will invite room for growth as a programmer, where I will sharpen my expertise in my existing skillset, and where I can attain experience in new technologies or techniques.</Text>
                    </View>
                    <View style={styles.mainSectionCategory}>
                        <Text style={styles.mainSectionCategoryTitle}>Courses</Text>
                        <Text style={styles.coursesDisclaimer}>All courses were done alongside practice and thoroughly taking notes when needed.</Text>
                        {courses.map((course, index) => <Course 
                            key={index} 
                            name={course.name} 
                            link={course.link}
                            hours={course.hours}
                            description={course.description}
                        />)}
                    </View>
                    <View>
                        <Text style={styles.mainSectionCategoryTitle}>Recent Projects</Text>
                        <View>
                            {projects.map((project, index) => <Project 
                                key={index} 
                                name={project.name}
                                stack={project.stack}
                                githubLink={project.githubLink}
                                description={project.description}
                            />)}
                        </View>
                    </View>
                </View>
            </View>
        </Page>
    </Document>
);


export { PDFDocument as default };