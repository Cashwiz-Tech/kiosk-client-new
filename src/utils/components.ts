import { ComponentStatus, ComponentType } from "types/components";
import activeImg from "../assets/active_icon.png";
import inactiveImg from "../assets/not_active_icon.png";

export function getComponentTypeName(componentType: ComponentType): string {
  switch (componentType) {
    case ComponentType.Dispenser: return "Dispenser";
    case ComponentType.NFC: return "NFC";
    case ComponentType.Camera: return "Camera";
    case ComponentType.Printer: return "Printer";
    case ComponentType.Acceptor: return "Acceptor";
    default: return "Unknown";
  }
}

export function getComponentStatusText(status: ComponentStatus): string {
  switch (status) {
    case ComponentStatus.Active: return "פעיל";
    case ComponentStatus.Inactive: return "לא פעיל";
  }
}

export function getComponentStatusImg(status: ComponentStatus): string {
  switch (status) {
    case ComponentStatus.Active: return activeImg;
    case ComponentStatus.Inactive: return inactiveImg;
  }
}
