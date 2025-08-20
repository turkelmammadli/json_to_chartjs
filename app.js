document.addEventListener('DOMContentLoaded', () => {
    // DOM elements
    const jsonInput = document.getElementById('jsonInput');
    const generateBtn = document.getElementById('generateBtn');
    const clearBtn = document.getElementById('clearBtn');
    const chartCanvas = document.getElementById('chartCanvas');
    const errorMessage = document.getElementById('errorMessage');
    
    // Chart instance reference
    let chartInstance = null;
    
    // Generate chart from JSON input
    generateBtn.addEventListener('click', () => {
        try {
            // Clear previous error messages
            errorMessage.textContent = '';
            errorMessage.style.display = 'none';
            
            // Parse JSON input
            const jsonConfig = JSON.parse(jsonInput.value);
            
            // Validate the JSON structure
            if (!jsonConfig.type) {
                throw new Error('Chart type is required');
            }
            
            if (!jsonConfig.data) {
                throw new Error('Chart data is required');
            }
            
            // Destroy previous chart if it exists
            if (chartInstance) {
                chartInstance.destroy();
            }
            
            // Create new chart
            chartInstance = new Chart(chartCanvas, jsonConfig);
            
        } catch (error) {
            // Display error message
            errorMessage.textContent = `Error: ${error.message}`;
            errorMessage.style.display = 'block';
        }
    });
    
    // Clear input and chart
    clearBtn.addEventListener('click', () => {
        // Clear JSON input
        jsonInput.value = '';
        
        // Clear error message
        errorMessage.textContent = '';
        errorMessage.style.display = 'none';
        
        // Destroy chart if it exists
        if (chartInstance) {
            chartInstance.destroy();
            chartInstance = null;
        }
    });
    
    // Sample JSON for demonstration
    const sampleJson = {
        type: 'bar',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [{
                label: 'Sample Data',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Sample Chart'
                }
            }
        }
    };
    
    // Load sample JSON on page load
    jsonInput.value = JSON.stringify(sampleJson, null, 2);
});
