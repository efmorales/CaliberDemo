# Caliber Widescreen Demo

This is a React Native project that includes video playback and exercise details, designed for a landscape view for either iPad or iPhone.

## Getting Started

Follow these instructions to get the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js and npm/yarn installed on your machine.
- React Native CLI installed globally.
- Android Studio/Xcode installed for Android/iOS development respectively.

### Installation

1. Clone the repository:
```bash
git clone https://github.com/efmorales/CaliberDemo.git
```

2. Navigate into the project directory:
```bash
cd CaliberDemo
```

3. Install the dependencies:
```bash
npm install
# OR
yarn install
```
4. Run the Metro Bundler:

```bash
npm start
# OR
yarn start
```
5. In a new terminal, run the app on iOS:

```bash
npx react-native run-ios --simulator="iPad Air (5th generation)"
```


## Usage

This project includes two main components: `VideoLoop` and `ExerciseDetail`.

`VideoLoop` is responsible for playing a video from the local assets. `ExerciseDetail` displays the details of an exercise.

## Troubleshooting

If you encounter any issues, check the [React Native Troubleshooting page](https://reactnative.dev/docs/troubleshooting).

## License

[MIT](https://choosealicense.com/licenses/mit/)