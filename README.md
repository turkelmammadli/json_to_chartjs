# JSON to Chart.js Visualizer

A simple web application that converts JSON configuration into Chart.js visualizations.

## Features

- Convert JSON configuration to Chart.js charts
- Support for all Chart.js chart types (bar, line, pie, etc.)
- Real-time visualization
- Error handling for invalid JSON
- Responsive design

## How to Use

1. Clone or download this repository
2. Open `index.html` in your web browser
3. Enter your Chart.js JSON configuration in the text area
4. Click the "Generate Chart" button to visualize your data
5. Use the "Clear" button to reset the input and chart

## JSON Format

The application expects JSON in the Chart.js configuration format:

```json
{
  "type": "bar",
  "data": {
    "labels": ["January", "February", "March"],
    "datasets": [{
      "label": "My Dataset",
      "data": [10, 20, 30],
      "backgroundColor": "rgba(75, 192, 192, 0.2)"
    }]
  },
  "options": {
    "responsive": true,
    "plugins": {
      "title": {
        "display": true,
        "text": "Chart Title"
      }
    }
  }
}
```

## Chart Types

You can use any chart type supported by Chart.js:

- bar
- line
- pie
- doughnut
- radar
- polarArea
- bubble
- scatter

## Dependencies

- [Chart.js](https://www.chartjs.org/) (loaded via CDN)

## License

MIT
