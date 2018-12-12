pipeline {
    agent any
	environment {
        CI = 'true' 
    }
    stages {
        stage('Build') { 
            steps {
                bat 'npm install' 
            }
        }
		stage('Deliver') { 
            steps {
				bat 'echo The following npm  command starts your simple Node.js/React'
				bat 'npm start'
				
			}
        }
	}
}