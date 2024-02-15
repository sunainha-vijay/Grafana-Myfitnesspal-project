// Function to handle file selection and upload
function handleFileUpload(file) {
    const formData = new FormData();
    formData.append('csvFile', file);

    // Simulate processing time (replace with actual backend logic)
    setTimeout(() => {
        renderGrafanaVisualization(); // Function to render Grafana visualizations
        alert('File uploaded successfully!'); // Display message when file is uploaded
    }, 2000); // Simulate 2 seconds processing time
}

// Function to render Grafana visualizations (dummy function for demonstration)
function renderGrafanaVisualization() {
    const grafanaContainer = document.getElementById('grafanaContainer');
    grafanaContainer.innerHTML = '<p>Sci-fi visualizations will be rendered here...</p>';
    // Implement logic to render Grafana visualizations here
}

// Initialize drag and drop functionality (if needed)
const dragDropArea = document.getElementById('dragDropArea');

dragDropArea.addEventListener('dragover', function(event) {
    event.preventDefault();
    dragDropArea.classList.add('drag-over');
});

dragDropArea.addEventListener('dragleave', function(event) {
    event.preventDefault();
    dragDropArea.classList.remove('drag-over');
});

dragDropArea.addEventListener('drop', function(event) {
    event.preventDefault();
    dragDropArea.classList.remove('drag-over');
    const files = event.dataTransfer.files;
    handleFileUpload(files[0]);
});

// Event listener for file input change
document.getElementById('csvFile').addEventListener('change', function(event) {
    const file = event.target.files[0];
    handleFileUpload(file);
});
