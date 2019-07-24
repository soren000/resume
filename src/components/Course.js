import React from 'react';
import {View, Text, Link, Image} from '@react-pdf/renderer';
import styles from '../styles/main';
import udemyLogo from '../udemy-logo.png';

const Course = ({name, hours, link, description}) => (
    <View style={styles.course}>
    <View style={styles.courseDetails}>
        <Text style={styles.projectTitle}>{name}</Text>
        <View style={styles.stack}>
            <Text>{hours} hours</Text>
        </View>
        <View style={styles.gitHub}>
            <Image style={styles.udemyLogo} src={udemyLogo} />
            <Link style={styles.link} src={link}>Udemy</Link>
        </View>
    </View>
    <Text style={styles.courseDescription}>{description}</Text>
    </View>
)

export { Course as default };