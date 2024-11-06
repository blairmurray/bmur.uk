# bmur.uk Hub

Central hub website connecting all bmur.uk applications and services.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🛠️ Technologies

- React
- TypeScript
- Vite
- Material-UI
- Framer Motion
- Docker
- Nginx

## 🏗️ Project Structure

```text
bmur.uk/
├── src/
│   ├── components/  # Reusable UI components
│   ├── pages/       # Page components
│   ├── styles/      # Global styles
│   └── main.tsx     # Application entry point
├── public/          # Static assets
├── dist/           # Production build output
├── Dockerfile      # Container configuration
└── package.json    # Project dependencies
```

## 🔗 Connected Services

- [blair.scot](https://blair.scot) - Personal portfolio
- [bolt.bmur.uk](https://bolt.bmur.uk) - AI Development Environment
- Additional services coming soon

## 🐳 Docker Deployment

Build and run using Docker:

```bash
# Build the container
docker build -t bmur-uk .

# Run the container
docker run -p 80:80 bmur-uk
```

Or using docker-compose:

```bash
docker-compose up -d
```

## 🎨 Design System

- Primary Color: #9c27b0 (Purple)
- Secondary Color: #ba68c8 (Light Purple)
- Font: System font stack
- Animations: Framer Motion for smooth transitions
- Material-UI components for consistent UI

## 📝 Development Guidelines

1. Use TypeScript for type safety
2. Follow Material-UI best practices
3. Implement responsive design
4. Maintain animation consistency
5. Write meaningful commit messages

## 🚀 Deployment

The site is automatically deployed:

1. Build creates optimized files in `dist/`
2. Nginx serves the static files
3. SSL through Certbot
4. Cloudflare for DNS and CDN

## 🔧 Maintenance

Regular tasks:
- Security updates via `npm audit`
- Dependency updates
- Performance monitoring
- SSL certificate renewal
- Analytics review

## 📈 Performance

Optimization targets:
- First Load JS < 100kb
- Lighthouse score > 90
- Core Web Vitals compliance
- Mobile-first responsive design

## 🤝 Contributing

1. Fork the repository
2. Create feature branch
3. Make changes
4. Submit pull request

## 📄 License

MIT License - see [LICENSE](LICENSE)

## 📞 Contact

- Email: [contact@bmur.uk](mailto:contact@bmur.uk)
- GitHub: [@yourusername](https://github.com/yourusername)

## 🔄 CI/CD

- Automated testing
- Docker image builds
- Deployment checks
- Performance monitoring

## 🔒 Security

- Regular security audits
- Dependency scanning
- SSL/TLS configuration
- Content Security Policy

---

Made with ❤️ by Blair Murray
