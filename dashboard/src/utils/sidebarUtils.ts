
import { MenuItem, SubMenuItem } from '../config/sidebarConfig';

export class SidebarManager {
  private static items: MenuItem[] = [];

  // Add a new menu item
  static addMenuItem(item: MenuItem): void {
    this.items.push(item);
  }

  // Add a new heading
  static addHeading(id: string, text: string): void {
    this.addMenuItem({
      id,
      type: 'heading',
      text
    });
  }

  // Add a new item with optional submenu
  static addItem(
    id: string,
    text: string,
    icon: React.ReactNode,
    options?: {
      isActive?: boolean;
      badge?: string;
      hasSubMenu?: boolean;
      subMenuItems?: SubMenuItem[];
      onClick?: () => void;
    }
  ): void {
    this.addMenuItem({
      id,
      type: 'item',
      text,
      icon,
      ...options
    });
  }

  // Remove an item by ID
  static removeItem(id: string): void {
    this.items = this.items.filter(item => item.id !== id);
  }

  // Get all items
  static getItems(): MenuItem[] {
    return this.items;
  }

  // Clear all custom items
  static clearItems(): void {
    this.items = [];
  }

  // Insert item at specific position
  static insertItemAt(index: number, item: MenuItem): void {
    this.items.splice(index, 0, item);
  }

  // Update an existing item
  static updateItem(id: string, updates: Partial<MenuItem>): void {
    const index = this.items.findIndex(item => item.id === id);
    if (index !== -1) {
      this.items[index] = { ...this.items[index], ...updates };
    }
  }
}

// Example usage functions
export const addNewSection = (
  sectionId: string,
  sectionTitle: string,
  items: Array<{
    id: string;
    text: string;
    icon: React.ReactNode;
    onClick?: () => void;
    badge?: string;
    subItems?: SubMenuItem[];
  }>
) => {
  // Add heading
  SidebarManager.addHeading(sectionId + '-heading', sectionTitle);
  
  // Add items
  items.forEach(item => {
    SidebarManager.addItem(item.id, item.text, item.icon, {
      onClick: item.onClick,
      badge: item.badge,
      hasSubMenu: !!item.subItems,
      subMenuItems: item.subItems
    });
  });
};
