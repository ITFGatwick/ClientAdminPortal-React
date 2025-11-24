import { initialClients } from "../data/data";

const storageKey = "CLIENT_ADMIN_PORTAL_STORAGE_KEY"

export function ensureClientDataExistsInSessionStorage() {
  const clients = getClientData();

  if (clients.length === 0) {
    saveClientsToSessionStorage(initialClients)
  }
}

export function getClientData() {
  const serializedClients = sessionStorage.getItem(storageKey);
  if (!serializedClients) {
    return [];
  }

  return JSON.parse(serializedClients)
}

export function saveClientsToSessionStorage(clients) {
  const serializedClients = JSON.stringify(clients);
  sessionStorage.setItem(storageKey, serializedClients);
}

export function addClient(name, description) {
  const clients = getClientData();
  const newClient = {
    id: clients.length + 1,
    name,
    description,
    relatedClients: []
  }

  saveClientsToSessionStorage([...clients, newClient])
}