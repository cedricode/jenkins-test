pipeline {
  agent { docker {image 'node:8.9.1'}}
  stages {
    stage('build') {
      steps {
        sh 'npm --version'
      }
    }
  }
}
