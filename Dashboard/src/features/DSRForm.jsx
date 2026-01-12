import { useState } from 'react';
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  InputAdornment,
  MenuItem,
  useTheme,
  useMediaQuery,
  Divider,
  Stepper,
  Step,
  StepLabel,
  Card,
  CardContent,
  IconButton,
  Collapse,
} from '@mui/material';
import {
  LocalShipping as ShippingIcon,
  Person as ShipperIcon,
  Assignment as InvoiceIcon,
  CalendarToday as DateIcon,
  LocationOn as LocationIcon,
  Scale as WeightIcon,
  ExpandMore as ExpandMoreIcon,
  ExpandLess as ExpandLessIcon,
} from '@mui/icons-material';

const DSRForm = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  
  // Form state for DSR (Delivery Status Report)
  const [formData, setFormData] = useState({
    refNumber: '',
    status: 'MOVED',
    shipperName: '',
    consignee: '',
    invoiceNo: '',
    switchInvoiceNo: '',
    gaalApprovedDate: '',
    pol: 'SIN',
    pod: 'NSA',
    shippingMode: 'LCL',
    term: 'CFR',
    mawbMbl: '',
    hawbHbl: '',
    etd: '',
    eta: '',
    etaPpg: '',
    noOfPkg: 1,
    grsWt: 0,
    cWt: 0,
    statusRemarks: 'CFS WAREHOUSE',
    remarks: ''
  });

  const [errors, setErrors] = useState({});
  const [activeStep, setActiveStep] = useState(0);
  const [expandedSection, setExpandedSection] = useState(null);

  const handleSectionToggle = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    
    if (Object.keys(validationErrors).length === 0) {
      console.log('DSR submitted:', formData);
      alert('DSR record submitted successfully!');
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = () => {
    const errors = {};
    
    if (!formData.shipperName.trim()) errors.shipperName = 'Shipper name is required';
    if (!formData.consignee.trim()) errors.consignee = 'Consignee is required';
    if (!formData.invoiceNo.trim()) errors.invoiceNo = 'Invoice number is required';
    if (!formData.etd) errors.etd = 'ETD is required';
    if (!formData.eta) errors.eta = 'ETA is required';
    if (formData.noOfPkg <= 0) errors.noOfPkg = 'Number of packages must be greater than 0';
    if (formData.grsWt <= 0) errors.grsWt = 'Gross weight must be greater than 0';

    return errors;
  };

  const resetForm = () => {
    setFormData({
      refNumber: '',
      status: 'MOVED',
      shipperName: '',
      consignee: '',
      invoiceNo: '',
      switchInvoiceNo: '',
      gaalApprovedDate: '',
      pol: 'SIN',
      pod: 'NSA',
      shippingMode: 'LCL',
      term: 'CFR',
      mawbMbl: '',
      hawbHbl: '',
      etd: '',
      eta: '',
      etaPpg: '',
      noOfPkg: 1,
      grsWt: 0,
      cWt: 0,
      statusRemarks: 'CFS WAREHOUSE',
      remarks: ''
    });
    setErrors({});
  };

  const formSections = [
    {
      title: 'Basic Information',
      icon: <ShipperIcon />,
      fields: [
        { name: 'refNumber', label: 'Reference Number' },
        { name: 'status', label: 'Status', select: true, options: [
          { value: 'MOVED', label: 'MOVED' },
          { value: 'PENDING', label: 'PENDING' },
          { value: 'DELIVERED', label: 'DELIVERED' }
        ]},
        { name: 'shipperName', label: 'Shipper Name', required: true, icon: <ShipperIcon /> },
        { name: 'consignee', label: 'Consignee', required: true, icon: <ShipperIcon /> }
      ]
    },
    {
      title: 'Invoice Details',
      icon: <InvoiceIcon />,
      fields: [
        { name: 'invoiceNo', label: 'Invoice Number', required: true, icon: <InvoiceIcon /> },
        { name: 'switchInvoiceNo', label: 'Switch Invoice Number', icon: <InvoiceIcon /> },
        { name: 'gaalApprovedDate', label: 'GAAL Approved Date', type: 'date', icon: <DateIcon /> }
      ]
    },
    {
      title: 'Shipping Details',
      icon: <ShippingIcon />,
      fields: [
        { name: 'pol', label: 'Port of Loading (POL)', select: true, icon: <LocationIcon />, options: [
          { value: 'SIN', label: 'Singapore (SIN)' },
          { value: 'NSA', label: 'Nigeria (NSA)' },
          { value: 'LAG', label: 'Lagos (LAG)' },
          { value: 'PH', label: 'Port Harcourt (PH)' }
        ]},
        { name: 'pod', label: 'Port of Discharge (POD)', select: true, icon: <LocationIcon />, options: [
          { value: 'NSA', label: 'Nigeria (NSA)' },
          { value: 'SIN', label: 'Singapore (SIN)' },
          { value: 'LAG', label: 'Lagos (LAG)' },
          { value: 'PH', label: 'Port Harcourt (PH)' }
        ]},
        { name: 'shippingMode', label: 'Shipping Mode', select: true, icon: <ShippingIcon />, options: [
          { value: 'LCL', label: 'LCL (Less than Container Load)' },
          { value: 'FCL', label: 'FCL (Full Container Load)' },
          { value: 'AIR', label: 'AIR Freight' }
        ]},
        { name: 'term', label: 'Term', select: true, options: [
          { value: 'CFR', label: 'CFR (Cost and Freight)' },
          { value: 'FOB', label: 'FOB (Free on Board)' },
          { value: 'CIF', label: 'CIF (Cost, Insurance, Freight)' },
          { value: 'EXW', label: 'EXW (Ex Works)' }
        ]}
      ]
    },
    {
      title: 'Transport Details',
      icon: <ShippingIcon />,
      fields: [
        { name: 'mawbMbl', label: 'MAWB/MBL', helperText: 'Master Air Waybill / Master Bill of Lading' },
        { name: 'hawbHbl', label: 'HAWB/HBL', helperText: 'House Air Waybill / House Bill of Lading' },
        { name: 'etd', label: 'Estimated Time of Departure (ETD)', type: 'date', required: true, icon: <DateIcon /> },
        { name: 'eta', label: 'Estimated Time of Arrival (ETA)', type: 'date', required: true, icon: <DateIcon /> },
        { name: 'etaPpg', label: 'ETA PPG for LCL Shipment', helperText: 'Estimated Time of Arrival at Port for LCL' }
      ]
    },
    {
      title: 'Package Details',
      icon: <WeightIcon />,
      fields: [
        { name: 'noOfPkg', label: 'Number of Packages', type: 'number', required: true, inputProps: { min: 1 } },
        { name: 'grsWt', label: 'Gross Weight (kg)', type: 'number', required: true, inputProps: { min: 0, step: 0.01 }, icon: <WeightIcon /> },
        { name: 'cWt', label: 'Chargeable Weight (kg)', type: 'number', inputProps: { min: 0, step: 0.01 }, icon: <WeightIcon /> },
        { name: 'statusRemarks', label: 'Status Remarks', select: true, options: [
          { value: 'CFS WAREHOUSE', label: 'CFS WAREHOUSE' },
          { value: 'IN TRANSIT', label: 'IN TRANSIT' },
          { value: 'DELIVERED', label: 'DELIVERED' },
          { value: 'CUSTOMS CLEARANCE', label: 'CUSTOMS CLEARANCE' },
          { value: 'AWAITING PICKUP', label: 'AWAITING PICKUP' }
        ]}
      ]
    },
    {
      title: 'Additional Information',
      icon: <InvoiceIcon />,
      fields: [
        { name: 'remarks', label: 'Additional Remarks', multiline: true, rows: 3 }
      ]
    }
  ];

  const renderField = (field) => {
    const commonProps = {
      fullWidth: true,
      name: field.name,
      label: field.label,
      value: formData[field.name] || '',
      onChange: handleChange,
      variant: 'outlined',
      error: !!errors[field.name],
      required: field.required,
      InputLabelProps: field.type === 'date' ? { shrink: true } : undefined,
      InputProps: field.icon ? {
        startAdornment: (
          <InputAdornment position="start">
            {field.icon}
          </InputAdornment>
        ),
      } : undefined,
      inputProps: field.inputProps,
      helperText: field.helperText || errors[field.name],
      sx: { 
        mb: 2,
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.23)' : 'rgba(0, 0, 0, 0.23)',
          },
          '&:hover fieldset': {
            borderColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)',
          },
        },
        '& .MuiInputLabel-root': {
          color: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.6)',
        },
        '& .MuiInputBase-input': {
          color: theme.palette.text.primary,
        },
      }
    };

    if (field.select) {
      return (
        <TextField select {...commonProps}>
          {field.options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      );
    }

    if (field.multiline) {
      return <TextField multiline rows={field.rows} {...commonProps} />;
    }

    return <TextField type={field.type} {...commonProps} />;
  };

  return (
    <Container maxWidth="lg" sx={{ py: isMobile ? 2 : 4 }}>
      
<Paper 
  elevation={isMobile ? 0 : 3} 
  sx={{ 
    p: isMobile ? 1 : 3, 
    borderRadius: theme.shape.borderRadius,
    backgroundColor: 'background.paper',
    color: 'text.primary',
    transition: theme.transitions.create(['background-color', 'color'], {
      duration: theme.transitions.duration.standard,
    }),
  }}
>
        <Box sx={{ textAlign: 'center', mb: 3 }}>
          <Typography variant={isMobile ? 'h5' : 'h4'} component="h1" sx={{ 
            fontWeight: 700, 
            mb: 1,
            color: theme.palette.primary.main
          }}>
            Add Material
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Create new material record for delivery tracking
          </Typography>
        </Box>

        {!isMobile && (
          <Stepper activeStep={activeStep} alternativeLabel sx={{ 
            mb: 4,
            '& .MuiStepLabel-label': {
              color: theme.palette.text.secondary,
            },
            '& .MuiStepLabel-active .MuiStepLabel-label': {
              color: theme.palette.text.primary,
            }
          }}>
            {formSections.map((section, index) => (
              <Step key={section.title} onClick={() => setActiveStep(index)} sx={{ cursor: 'pointer' }}>
                <StepLabel>{section.title}</StepLabel>
              </Step>
            ))}
          </Stepper>
        )}

        <form onSubmit={handleSubmit}>
          {isMobile || isTablet ? (
            <Box>
              {formSections.map((section) => (
                <Card key={section.title} sx={{ 
                  mb: 2,
                  backgroundColor: theme.palette.background.paper
                }}>
                  <CardContent>
                    <Box 
                      sx={{ 
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        alignItems: 'center',
                        cursor: 'pointer'
                      }}
                      onClick={() => handleSectionToggle(section.title)}
                    >
                      <Typography variant="h6" sx={{ 
                        display: 'flex', 
                        alignItems: 'center',
                        color: theme.palette.text.primary
                      }}>
                        {section.icon}
                        <Box component="span" sx={{ ml: 1 }}>{section.title}</Box>
                      </Typography>
                      <IconButton size="small">
                        {expandedSection === section.title ? 
                          <ExpandLessIcon color="inherit" /> : 
                          <ExpandMoreIcon color="inherit" />}
                      </IconButton>
                    </Box>
                    <Collapse in={expandedSection === section.title}>
                      <Divider sx={{ my: 2 }} />
                      <Grid container spacing={2}>
                        {section.fields.map((field) => (
                          <Grid item xs={12} key={field.name}>
                            {renderField(field)}
                          </Grid>
                        ))}
                      </Grid>
                    </Collapse>
                  </CardContent>
                </Card>
              ))}
            </Box>
          ) : (
            <Grid container spacing={3}>
              {formSections[activeStep].fields.map((field) => (
                <Grid item xs={12} sm={6} key={field.name}>
                  {renderField(field)}
                </Grid>
              ))}
            </Grid>
          )}

          {/* Remarks field - always visible */}
          <Grid item xs={12} sx={{ mt: 2 }}>
            {renderField({
              name: 'remarks',
              label: 'Additional Remarks',
              multiline: true,
              rows: 3,
              placeholder: 'Enter any additional information or special instructions...'
            })}
          </Grid>

          {/* Action buttons */}
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'flex-end', 
            gap: 2, 
            mt: 4,
            flexDirection: isMobile ? 'column' : 'row'
          }}>
            <Button
              variant="outlined"
              size="large"
              onClick={resetForm}
              fullWidth={isMobile}
              sx={{ 
                minWidth: isMobile ? '100%' : 120,
                borderRadius: 2,
                textTransform: 'none',
                color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.main,
                borderColor: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.main,
              }}
            >
              Reset Form
            </Button>
           <Button
  variant="contained"
  sx={{
    bgcolor: 'primary.main',
    '&:hover': {
      bgcolor: 'primary.dark',
    },
    // Use theme spacing and typography
    borderRadius: theme.shape.borderRadius,
    fontSize: theme.typography.button.fontSize,
    fontWeight: theme.typography.fontWeightBold,
  }}
>
  Submit Record
</Button>
          </Box>
        </form>
      </Paper>
    </Container>
  );
};

export default DSRForm;