import React from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import PDFDocument from './components/PDFDocument';
import './styles/main.scss'

const App = () => {
    return (
        <div className="AppMaster">
            <PDFViewer className="Viewer">
                <PDFDocument />
            </PDFViewer>

        </div>
    );
}

export default App;