import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, spacing } from '../../../theme/adminTheme';
import { LOCATIONS } from '../../../constants/adminData';

interface LocationSelectorProps {
  selectedLocation: string;
  onLocationChange: (location: string) => void;
}

export const LocationSelector: React.FC<LocationSelectorProps> = ({
  selectedLocation,
  onLocationChange,
}) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLocationSelect = (location: string) => {
    onLocationChange(location);
    setShowDropdown(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Select Location</Text>
      <TouchableOpacity
        style={styles.picker}
        onPress={() => setShowDropdown(!showDropdown)}
      >
        <Text style={styles.pickerText}>{selectedLocation}</Text>
        <Ionicons name="chevron-down" size={20} color={colors.gray[600]} />
      </TouchableOpacity>
      
      {showDropdown && (
        <View style={styles.dropdown}>
          {LOCATIONS.map((location) => (
            <TouchableOpacity
              key={location}
              style={styles.option}
              onPress={() => handleLocationSelect(location)}
            >
              <Text style={[
                styles.optionText,
                selectedLocation === location && styles.optionActive
              ]}>
                {location}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
      
      <View style={styles.showingData}>
        <Ionicons name="location" size={16} color={colors.cyan} />
        <Text style={styles.showingDataText}>
          Showing data for: {selectedLocation}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: spacing.md,
    marginBottom: spacing.md,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.gray[700],
    marginBottom: spacing.sm,
  },
  picker: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.gray[50],
    borderRadius: 8,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.gray[200],
  },
  pickerText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.gray[800],
  },
  dropdown: {
    marginTop: spacing.sm,
    backgroundColor: 'white',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.gray[200],
    overflow: 'hidden',
  },
  option: {
    padding: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray[100],
  },
  optionText: {
    fontSize: 15,
    color: colors.gray[700],
  },
  optionActive: {
    color: colors.cyan,
    fontWeight: '600',
  },
  showingData: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: spacing.sm,
    gap: spacing.xs,
  },
  showingDataText: {
    fontSize: 14,
    color: colors.cyan,
    fontWeight: '600',
  },
});