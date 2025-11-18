// Local database using localStorage for user and partner data

export interface User {
  id: string;
  email: string;
  name: string;
  picture?: string;
  provider: 'google' | 'email';
  createdAt: string;
  lastLogin: string;
}

export interface Partner {
  id: string;
  email: string;
  name: string;
  phone: string;
  businessName?: string;
  serviceType: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  experience: string;
  documents?: string[];
  status: 'pending' | 'approved' | 'rejected';
  createdAt: string;
}

const DB_KEYS = {
  USERS: 'yann_users',
  PARTNERS: 'yann_partners',
  CURRENT_USER: 'yann_current_user',
  CURRENT_PARTNER: 'yann_current_partner',
};

// User Database Functions
export const userDB = {
  // Get all users
  getAll(): User[] {
    const data = localStorage.getItem(DB_KEYS.USERS);
    return data ? JSON.parse(data) : [];
  },

  // Get user by email
  getByEmail(email: string): User | null {
    const users = this.getAll();
    return users.find((u) => u.email === email) || null;
  },

  // Create new user
  create(user: Omit<User, 'id' | 'createdAt' | 'lastLogin'>): User {
    const users = this.getAll();
    const newUser: User = {
      ...user,
      id: `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      createdAt: new Date().toISOString(),
      lastLogin: new Date().toISOString(),
    };
    users.push(newUser);
    localStorage.setItem(DB_KEYS.USERS, JSON.stringify(users));
    return newUser;
  },

  // Update user
  update(id: string, updates: Partial<User>): User | null {
    const users = this.getAll();
    const index = users.findIndex((u) => u.id === id);
    if (index === -1) return null;
    users[index] = { ...users[index], ...updates, lastLogin: new Date().toISOString() };
    localStorage.setItem(DB_KEYS.USERS, JSON.stringify(users));
    return users[index];
  },

  // Set current logged in user
  setCurrent(user: User | null): void {
    if (user) {
      localStorage.setItem(DB_KEYS.CURRENT_USER, JSON.stringify(user));
    } else {
      localStorage.removeItem(DB_KEYS.CURRENT_USER);
    }
  },

  // Get current logged in user
  getCurrent(): User | null {
    const data = localStorage.getItem(DB_KEYS.CURRENT_USER);
    return data ? JSON.parse(data) : null;
  },

  // Logout
  logout(): void {
    localStorage.removeItem(DB_KEYS.CURRENT_USER);
  },
};

// Partner Database Functions
export const partnerDB = {
  // Get all partners
  getAll(): Partner[] {
    const data = localStorage.getItem(DB_KEYS.PARTNERS);
    return data ? JSON.parse(data) : [];
  },

  // Get partner by email
  getByEmail(email: string): Partner | null {
    const partners = this.getAll();
    return partners.find((p) => p.email === email) || null;
  },

  // Get partner by ID
  getById(id: string): Partner | null {
    const partners = this.getAll();
    return partners.find((p) => p.id === id) || null;
  },

  // Create new partner registration
  create(partner: Omit<Partner, 'id' | 'status' | 'createdAt'>): Partner {
    const partners = this.getAll();
    const newPartner: Partner = {
      ...partner,
      id: `partner_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      status: 'pending',
      createdAt: new Date().toISOString(),
    };
    partners.push(newPartner);
    localStorage.setItem(DB_KEYS.PARTNERS, JSON.stringify(partners));
    return newPartner;
  },

  // Update partner
  update(id: string, updates: Partial<Partner>): Partner | null {
    const partners = this.getAll();
    const index = partners.findIndex((p) => p.id === id);
    if (index === -1) return null;
    partners[index] = { ...partners[index], ...updates };
    localStorage.setItem(DB_KEYS.PARTNERS, JSON.stringify(partners));
    return partners[index];
  },

  // Set current logged in partner
  setCurrent(partner: Partner | null): void {
    if (partner) {
      localStorage.setItem(DB_KEYS.CURRENT_PARTNER, JSON.stringify(partner));
    } else {
      localStorage.removeItem(DB_KEYS.CURRENT_PARTNER);
    }
  },

  // Get current logged in partner
  getCurrent(): Partner | null {
    const data = localStorage.getItem(DB_KEYS.CURRENT_PARTNER);
    return data ? JSON.parse(data) : null;
  },

  // Logout
  logout(): void {
    localStorage.removeItem(DB_KEYS.CURRENT_PARTNER);
  },
};

