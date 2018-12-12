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
				bat 'echo The following npm  command starts your simple Node.js/React in background'
				bat 'start npm start'
				
			}
        }
		stage('Kill') { 
            steps {
				bat 'echo ... will wait for 180 secs and then kill'
				bat 'ping 127.0.0.1 -n 180 > nul'
				bat 'taskkill /F /IM node.exe'
            }
        }
	}
}