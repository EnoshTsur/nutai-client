let apiUrl = '';

if (process.env.NODE_ENV === 'development') {
  apiUrl = 'http://localhost:4899/api';
} else if (process.env.NODE_ENV === 'production') {
  apiUrl = 'http://localhost:4899/api';
}

export default {
  apiUrl,
};