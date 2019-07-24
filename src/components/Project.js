import React from 'react';
import {View, Text, Link, Image} from '@react-pdf/renderer';
import styles from '../styles/main';
import reactLogo from '../react-logo.png';

const Project = ({ name, stack, githubLink, description }) => (
    <View style={styles.project}> 
        <View style={styles.courseDetails}>
            <Text style={styles.projectTitle}>{name}</Text>
            <View style={styles.stack}>
                <Image style={styles.reactLogo} src={reactLogo} />
                <Text>{stack}</Text>
            </View>
            <View style={styles.gitHub}>
                <Link style={styles.link} src={githubLink}>GitHub</Link>
            </View>
        </View>
        <View style={styles.courseDescription}>
            {description.map((point, index) => <Text key={index}>{point}</Text>)}
        </View>
    </View>
)

export { Project as default };