// server.ts - Next.js Standalone + Socket.IO
import { setupSocket } from '@/lib/socket';
import { createServer } from 'http';
import { Server } from 'socket.io';
import next from 'next';
import { existsSync } from 'fs';
import { join } from 'path';

const dev = process.env.NODE_ENV !== 'production';
const currentPort = 3000;
const hostname = '127.0.0.1';

// Custom server with Socket.IO integration
async function createCustomServer() {
  try {
    // Check if .next directory and BUILD_ID exist in production
    if (!dev) {
      const buildIdPath = join(process.cwd(), '.next', 'BUILD_ID');
      if (!existsSync(buildIdPath)) {
        throw new Error(
          'Could not find a production build in the \'.next\' directory. ' +
          'Try building your app with \'next build\' before starting the production server.'
        );
      }
    }

    // Create Next.js app
    const nextApp = next({ 
      dev,
      dir: process.cwd(),
    });

    await nextApp.prepare();
    const handle = nextApp.getRequestHandler();

    // Create HTTP server that will handle both Next.js and Socket.IO
    const server = createServer((req, res) => {
      // Skip socket.io requests from Next.js handler
      if (req.url?.startsWith('/api/socketio')) {
        return;
      }
      handle(req, res);
    });

    // Setup Socket.IO
    const io = new Server(server, {
      path: '/api/socketio',
      cors: {
        origin: "*",
        methods: ["GET", "POST"]
      }
    });

    setupSocket(io);

    // Start the server
    server.listen(currentPort, hostname, () => {
      console.log(`> Ready on http://${hostname}:${currentPort}`);
      console.log(`> Socket.IO server running at ws://${hostname}:${currentPort}/api/socketio`);
    });

  } catch (err) {
    console.error('Server startup error:', err);
    process.exit(1);
  }
}

// Start the server
createCustomServer();
