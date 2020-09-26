import logger from './fancylogger';

export default function logSecondImplementation() {
    logger.printLogCount();
    logger.log('Second File');
    logger.printLogCount();
}