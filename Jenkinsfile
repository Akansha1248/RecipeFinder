pipeline {
    agent any

    environment {
        GIT_REPO = 'https://github.com/yourusername/recipe-finder.git'
        BRANCH = 'main'
    }

    stages {
        stage('Clone Repository') {
            steps {
                git branch: "${BRANCH}", url: "${GIT_REPO}"
            }
        }

        stage('Build') {
            steps {
                echo 'No build needed for static site'
            }
        }

        stage('Test') {
            steps {
                echo 'Basic HTML/CSS/JS test can be added here'
            }
        }

        stage('Deploy') {
            steps {
                echo 'You can host with GitHub Pages or deploy with Node/Express/Docker'
                sh 'ls -la' // Just to simulate some command
            }
        }
    }

    post {
        success {
            echo 'Build and deploy successful!'
        }
        failure {
            echo 'Build failed.'
        }
    }
}
