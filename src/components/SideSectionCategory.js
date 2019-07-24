import React from 'react';
import { Text, View, Link } from '@react-pdf/renderer';
import styles from '../styles/main';

const SideSectionCategory = ( { items, title }) => {
    return (
        <View style={styles.sideSectionCategory}>
            <Text style={styles.sideSectionCategoryTitle}>{title}</Text>
            {items.map((item, index) => 
                <View 
                    key={index}
                    style={styles.sideSectionCategoryItem}
                >
                    {item.description && <Text>{item.description}</Text>}
                    {!item.link ? 
                        <Text nowrap={true}>{item.value}</Text> : 
                        <Link src={item.link} style={styles.link}>{item.value}</Link>
                    }
                </View>
            )}
        </View>
    )
}

export { SideSectionCategory as default }