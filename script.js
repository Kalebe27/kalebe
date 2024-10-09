const ctx1 = document.getElementById('socialMediaChart').getContext('2d');
const ctx2 = document.getElementById('growthChart').getContext('2d');

const socialMediaChart = new Chart(ctx1, {
    type: 'bar',
    data: {
        labels: ['Facebook', 'Instagram', 'Twitter', 'LinkedIn', 'TikTok'],
        datasets: [{
            label: 'Usuários (milhões)',
            data: [2900, 1500, 400, 774, 1000],
            backgroundColor: [
                'rgba(59, 89, 152, 0.6)',
                'rgba(225, 48, 108, 0.6)',
                'rgba(29, 161, 242, 0.6)',
                'rgba(0, 119, 181, 0.6)',
                'rgba(255, 24, 99, 0.6)'
            ],
            borderColor: [
                'rgba(59, 89, 152, 1)',
                'rgba(225, 48, 108, 1)',
                'rgba(29, 161, 242, 1)',
                'rgba(0, 119, 181, 1)',
                'rgba(255, 24, 99, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const growthChart = new Chart(ctx2, {
    type: 'line',
    data: {
        labels: ['2018', '2019', '2020', '2021', '2022', '2023'],
        datasets: [{
            label: 'Crescimento de Usuários (milhões)',
            data: [500, 650, 800, 950, 1150, 1300],
            fill: false,
            borderColor: 'rgba(75, 192, 192, 1)',
            tension: 0.1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

