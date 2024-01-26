# Caliber Landscape view Demo

This is a React Native project that includes video playback and exercise details, designed for a landscape view for either iPad or iPhone.

The objective of this project is to show how the landscape view can benefit the users with a clearer and bigger view of the selected exercise, a feature I wish I personally would love to see added to the app.

## Getting Started

Follow these instructions to get the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js and npm/yarn installed on your machine.
- React Native CLI installed with npx or globally.
- Xcode installed for iOS development.
- Simulators for iPhone and iPad installed within Xcode.

### Installation

1. Clone the repository:
```bash
git clone https://github.com/efmorales/CaliberDemo.git
```

2. Navigate into the project directory:
```bash
cd CaliberDemo
```

3. Install the big library dependencies:
```bash
npm install
# OR
yarn install
```
4. Install iOS (Pods) dependencies:
```bash
cd ios
pods install
```

5. Run the Metro Bundler:

```bash
npm start
# OR
yarn start
```
6. In a new terminal, run the app on iOS:

```bash
npx react-native run-ios --simulator="iPad Air (5th generation)"
```


## Usage

This project includes two main components: `VideoLoop` and `ExerciseDetail`.

`VideoLoop` is responsible for playing a video from the local assets. `ExerciseDetail` displays the details of an exercise.

The objective is to show how the landscape view can benefit an appropiate visibility of the selected exercise.

## Troubleshooting

If you encounter any issues, check the [React Native Troubleshooting page](https://reactnative.dev/docs/troubleshooting).

## License

[MIT](https://choosealicense.com/licenses/mit/)